import { URLSearchParams } from 'url';
import got, { Response as GotResponse, HTTPAlias } from 'got';

import { Options as GotRequestOptions } from 'got/dist/source/core';

import KeepAliveHTTP, { HttpsAgent as KeepAliveHTTPS } from 'agentkeepalive';

import {
  ClientOptions,
  IntercomErrorList,
  RequestError,
  IntercomPagesCursor,
  IntercomCursorPaginatedList,
} from 'types';

import { VERSION } from 'utils/constants';
import { sleep } from 'utils/promise';
import { stripLeadingSlash } from 'utils/strings';

const CLIENT = got.extend({
  prefixUrl: 'https://api.intercom.io',
  responseType: 'json',
  http2: true,
  headers: {
    Accept: 'application/json',
    'User-Agent': `intercomly/${VERSION}`,
    'Intercom-Version': '2.0',
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isIntercomError(body: any): body is IntercomErrorList {
  return body && typeof body === 'object' && body.type === 'error.list';
}

/**
 * Takes in an error from a request and makes the error object easier to consume for intercom errors.
 * This means that the error object itself will have the `errors` array if it is present as well as
 * we will set the error.message and error.code to the first error in the errors list by default so they
 * are not undefined / generic.
 */
function handleHTTPError(error: RequestError): void {
  const { statusCode } = error.response;
  const { body } = error.response;
  if (isIntercomError(body)) {
    Object.assign(error, {
      type: 'error.list',
      result: 'error',
      statusCode,
      requestId: body.request_id,
      errors: body.errors,
      code: body.errors?.[0]?.code || error.code,
      message: body.errors?.[0]?.message || error.message,
      originalMessage: error.message,
    });
  } else {
    Object.assign(error, {
      type: 'error',
      result: 'error',
      statusCode,
      originalMessage: error.message,
    });
  }
}

async function handlePaginationError(
  error: RequestError,
  failures: number,
  handleRateLimiting = true,
) {
  if (
    handleRateLimiting &&
    error.response.statusCode === 429 &&
    failures <= 10
  ) {
    // handle rate limiting for pagination - intercom resets
    // every 10 seconds, so we try at 1 second intervals up to
    // 10 seconds and only fail if it never succeeds
    // eslint-disable-next-line no-await-in-loop
    await sleep(1000);
  } else {
    handleHTTPError(error);
    throw error;
  }
}

export default class IntercomlyRequest {
  readonly #client: typeof got;

  constructor(
    options: ClientOptions,

    requestOptions: Parameters<typeof got['extend']>[0] = {},
  ) {
    this.#client = CLIENT.extend(
      {
        hooks: {
          beforeRequest: [
            (request) => {
              // eslint-disable-next-line no-param-reassign
              request.headers.Authorization = `Bearer ${options.token}`;
            },
          ],
        },
        ...(options.keepalive
          ? {
              agent: {
                http: new KeepAliveHTTP(),
                https: new KeepAliveHTTPS(),
              },
            }
          : {}),
      },
      requestOptions,
    );
  }

  async rawRequest<R>(
    method: HTTPAlias,
    path: string,
    options: undefined | GotRequestOptions,
  ): Promise<GotResponse<R>> {
    try {
      const result = await this.#client[method]<R>(
        stripLeadingSlash(path),
        options,
      );
      return result;
    } catch (error) {
      handleHTTPError(error);
      throw error;
    }
  }

  async get<R>(
    path: string,
    searchParams?: GotRequestOptions['searchParams'],
  ): Promise<R> {
    const result = await this.rawRequest<R>('get', path, { searchParams });
    return result.body;
  }

  async post<R>(path: string, body?: { [key: string]: unknown }): Promise<R> {
    const result = await this.rawRequest<R>(
      'post',
      path,
      body
        ? {
            json: body,
          }
        : undefined,
    );

    return result.body;
  }

  async put<R>(path: string, body?: { [key: string]: unknown }): Promise<R> {
    const result = await this.rawRequest<R>(
      'put',
      path,
      body
        ? {
            json: body,
          }
        : undefined,
    );

    return result.body;
  }

  async delete<R>(path: string, body?: { [key: string]: unknown }): Promise<R> {
    const result = await this.rawRequest<R>(
      'delete',
      path,
      body
        ? {
            json: body,
          }
        : undefined,
    );
    return result.body;
  }

  /**
   * AsyncGenerator to automatically recurse through the cursor-based endpoints.  Optionally have the
   * generator automatically retry requests when rate limited.
   *
   * @docs [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   */
  async *getCursorPaginated<R>(
    /**
     * Currently only applies to `contacts`
     */
    path: string,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    perPage?: number,
    /**
     * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
     * before throwing an error?
     */
    handleRateLimiting = true,
  ): AsyncGenerator<R[], void, void> {
    let page: IntercomPagesCursor;
    let failures = 0;
    const searchParams = new URLSearchParams();
    if (typeof perPage === 'number') {
      searchParams.set('per_page', String(perPage));
    }
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const result = await this.get<IntercomCursorPaginatedList<R>>(
          path,
          searchParams,
        );

        failures = 0;

        page = result.pages;

        yield result.data;

        if (!page || !page.next || result.data.length === 0) {
          break;
        }

        searchParams.set('starting_after', page.next.starting_after);
      } catch (error) {
        // eslint-disable-next-line no-await-in-loop
        await handlePaginationError(error, failures, handleRateLimiting);
        failures += 1;
      }
    }
  }

  /**
   * AsyncGenerator to automatically recurse through the cursor-based endpoints.  Optionally have the
   * generator automatically retry requests when rate limited. This method is used when handling pagination
   * via a post request and body (search for contacts).
   *
   * @docs [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   */
  async *postCursorPaginated<R>(
    /**
     * Currently only applies to `contacts`
     */
    path: string,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    _body: { [key: string]: unknown; pagination?: { per_page?: number } },
    /**
     * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
     * before throwing an error?
     */
    handleRateLimiting = true,
  ): AsyncGenerator<R[], void, void> {
    const body: {
      [key: string]: unknown;
      pagination: {
        per_page?: number;
        starting_after?: string;
      };
    } = {
      ..._body,
      pagination: _body.pagination
        ? {
            ..._body.pagination,
          }
        : {},
    };

    let failures = 0;

    let page: IntercomPagesCursor;

    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const result = await this.post<IntercomCursorPaginatedList<R>>(
          path,
          body,
        );

        failures = 0;
        page = result.pages;

        yield result.data;

        if (!page || !page.next || result.data.length === 0) {
          break;
        }

        body.pagination.per_page = page.per_page;
        body.pagination.starting_after = page.next.starting_after;
      } catch (error) {
        // eslint-disable-next-line no-await-in-loop
        await handlePaginationError(error, failures, handleRateLimiting);
        failures += 1;
      }
    }
  }
}
