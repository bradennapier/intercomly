import clone from 'lodash.clone';

import type { IntercomlyClient } from 'client';

import {
  Contact,
  IntercomCursorPaginatedList,
  AnyObj,
  SearchContactsQuery,
  SearchableFields,
  SearchPagination,
  SearchSort,
} from 'types';

import { isNestedQuery, isCustomAttributesQuery } from 'utils/guards';

function normalizeSearchQuery<
  ATTR extends AnyObj,
  F extends SearchableFields = SearchableFields
>(query: SearchContactsQuery<ATTR, F>['query']) {
  if (isNestedQuery<ATTR, F>(query)) {
    query.value.forEach(normalizeSearchQuery);
  } else if (isCustomAttributesQuery<ATTR>(query)) {
    const key: keyof ATTR = Object.keys(query.value)[0];
    Object.assign(query, {
      field: `custom_attributes.${key}`,
      value: ((query.value as unknown) as ATTR)[key],
    });
  }
}

/**
 * Provides custom helpers to conduct searches for contacts
 *
 * @docs - [Search for Contacts](https://developers.intercom.com/intercom-api-reference/reference#search-for-contacts)
 */
export abstract class IntercomSearch {
  /**
   * The raw search contacts function which allows you to search for contacts using queries and operators.
   * Nested operators (usign `AND` | `OR` allow up to 2 nested levels and each level may have a maximum of
   * **15 queries**)
   *
   * @docs - [Search for Contacts](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-fields)
   * @docs - [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)
   */
  async searchContacts<
    ATTR extends AnyObj,
    F extends SearchableFields = SearchableFields
  >(
    this: IntercomlyClient,
    /**
     * The search request to make.  This is an object with at least a `query`
     * property and possibly a `sort` and `pagination` key as defined in the
     * provided documentation.
     *
     * If no sort pattern is provided, the query will use the default sorting
     * parameter “last_request_at” with a descending value (e.g. listing most
     * recent active items first).
     *
     * @docs - [Search for Contacts](https://developers.intercom.com/intercom-api-reference/reference#search-for-contacts)
     * @docs - [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)
     */
    _search: SearchContactsQuery<ATTR, F>,
    /**
     * When true, the search request will be iterated and normalize any custom attributes parameters
     * to be properly configured.  This allows the search to use field: 'custom_attributes' and value
     * { [keyof attributes]: value | value[] }
     */
    normalizeQuery = true,
  ): Promise<IntercomCursorPaginatedList<Contact<ATTR>>> {
    const search = { ..._search };
    if (normalizeQuery) {
      const query = clone(search.query);
      normalizeSearchQuery<ATTR, F>(query);
      search.query = query;
    }
    const results = await this.request.post<
      IntercomCursorPaginatedList<Contact<ATTR>>
    >('contacts/search', search);

    return results;
  }

  async *searchContactsPaginated<
    ATTR extends AnyObj,
    F extends SearchableFields = SearchableFields,
    S extends SearchContactsQuery<ATTR, F> = SearchContactsQuery<ATTR, F>
  >(
    this: IntercomlyClient,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    search: {
      query: S['query'];
      sort?: SearchSort;
      pagination?: SearchPagination;
    },
    /**
     * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
     * before throwing an error?
     */
    handleRateLimiting = true,
  ): AsyncGenerator<Contact<ATTR>[], void, void> {
    for await (const contacts of this.request.postCursorPaginated<
      Contact<ATTR>
    >('contacts/search', search, handleRateLimiting)) {
      yield contacts;
    }
  }

  /**
   * An AsyncGenerator which allows easily recursing through the paginated contacts list.
   * By default each batch will include 50 results and the max is 150.  A third parameter
   * can be provided to indicate whether rate limiting should automatically be handled (this
   * defaults to true).
   *
   * @docs [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)
   * @docs [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   *
   * @example
   *  for await (const contacts of client.getContactsPaginated()) {
   *    console.log('Contacts Batch: ', contacts)
   *  }
   */
  async *searchContactsByEmailPaginated<ATTR extends AnyObj>(
    this: IntercomlyClient,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    email: string,
    options: {
      sort?: SearchSort;
      pagination?: SearchPagination;
      /**
       * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
       * before throwing an error?
       */
      handleRateLimiting: boolean;
    },
  ): AsyncGenerator<Contact<ATTR>[], void, unknown> {
    for await (const contacts of this.searchContactsPaginated<ATTR>(
      {
        query: {
          field: 'email',
          operator: '=',
          value: email,
        },
        pagination: options.pagination,
        sort: options.sort,
      },
      options.handleRateLimiting ?? true,
    )) {
      yield contacts;
    }
  }

  /**
   * An AsyncGenerator which allows easily recursing through the paginated contacts list.
   * By default each batch will include 50 results and the max is 150.  A third parameter
   * can be provided to indicate whether rate limiting should automatically be handled (this
   * defaults to true).
   *
   * @docs [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)
   * @docs [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   *
   * @example
   *  for await (const contacts of client.getContactsPaginated()) {
   *    console.log('Contacts Batch: ', contacts)
   *  }
   */
  async *searchContactsByRolePaginated<ATTR extends AnyObj>(
    this: IntercomlyClient,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    role: Contact['role'],
    options: {
      sort?: SearchSort;
      pagination?: SearchPagination;
      /**
       * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
       * before throwing an error?
       */
      handleRateLimiting?: boolean;
    },
  ): AsyncGenerator<Contact<ATTR>[], void, unknown> {
    for await (const contacts of this.searchContactsPaginated<ATTR>(
      {
        query: {
          field: 'role',
          operator: '=',
          value: role,
        },
        pagination: options.pagination,
        sort: options.sort,
      },
      options.handleRateLimiting ?? true,
    )) {
      yield contacts;
    }
  }
}
