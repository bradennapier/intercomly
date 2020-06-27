import { URLSearchParams } from 'url';

import type { IntercomlyClient } from 'client';

import {
  Contact,
  IntercomCursorPaginatedList,
  ContactCreateUser,
  AnyObj,
  ContactCreate,
  ContactCreateLead,
} from 'types';

import { getSearchParams } from 'utils/helpers';

export abstract class IntercomContacts {
  /**
   * Creates a new contact (user or lead).
   */
  createContact<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    contact: ContactCreate<R, ATTR>,
  ): Promise<Contact<ATTR, R>> {
    return this.request.post<Contact<ATTR, R>>('contacts', contact);
  }

  /**
   * Creates a new user contact
   */
  createUser<ATTR extends AnyObj>(
    this: IntercomlyClient,
    contact: ContactCreateUser<ATTR>,
  ): Promise<Contact<ATTR, 'user'>> {
    return this.createContact<ATTR, 'user'>(contact);
  }

  /**
   * Creates a new lead contact
   */
  createLead<ATTR extends AnyObj>(
    this: IntercomlyClient,
    contact: ContactCreateLead<ATTR>,
  ): Promise<Contact<ATTR, 'lead'>> {
    return this.createContact<ATTR, 'lead'>(contact);
  }

  updateContact<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    userId: string,
    contact: ContactCreate<R, ATTR>,
  ): Promise<Contact<ATTR, R>> {
    return this.request.put<Contact<ATTR, R>>(`contacts/${userId}`, contact);
  }

  /**
   * First checks for a given user by calling `getContactByExternalId` then calls update or
   * create based on if any user is found by the provided `externalId` (within the `contact`
   * parameter).
   */
  async upsertContactByExternalId<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    contact: ContactCreate<R, ATTR> & { external_id: Contact['external_id'] },
  ): Promise<Contact<ATTR, R> | undefined> {
    if (!contact.external_id) {
      throw new Error(
        '[ERROR] | intercomly | upsertContactByExternalId | property "external_id" is required',
      );
    }
    const existingUser = await this.getContactByExternalId<ATTR, R>(
      contact.external_id,
    );
    if (!existingUser) {
      return this.createContact<ATTR, R>(contact);
    }
    return this.updateContact<ATTR, R>(existingUser.id, contact);
  }

  /**
   * Retrieves the details of a single contact by their intercom-provided id.
   */
  async getContact<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    /** The unique identifier for the contact which is given by Intercom */
    contactId: string,
  ): Promise<Contact<ATTR, R>> {
    return this.request.get<Contact<ATTR, R>>(`contacts/${contactId}`);
  }

  /**
   * Retrieves the details of a single contact by their unique external id. If no user is
   * found this will resolve to `undefined`.
   */
  async getContactByExternalId<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    externalId: string,
  ): Promise<undefined | Contact<ATTR, R>> {
    const results = await this.request.post<
      IntercomCursorPaginatedList<Contact<ATTR, R>>
    >('contacts/search', {
      query: {
        field: 'external_id',
        operator: '=',
        value: externalId,
      },
    });
    return results.data[0];
  }

  /**
   * Retrieves contacts which have the provided email.  This may return multiple contacts and
   * returns the raw IntercomCursorPaginatedList.
   *
   * @note
   *  To automatically iterate through pages you can use `getContactsByEmailPaginated` which
   *  returns an `AsyncGenerator`.
   *
   * @docs [Search Contacts](https://developers.intercom.com/intercom-api-reference/reference#search-for-contacts)
   * @docs [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)
   */
  async getContactsByEmail<ATTR extends AnyObj>(
    this: IntercomlyClient,
    email: string,
    /**
     * Optionally provide search pagination options to include
     * in the body.
     *
     * @docs [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)
     */
    pagination?: {
      per_page?: number;
      starting_after?: string;
    },
  ): Promise<IntercomCursorPaginatedList<Contact<ATTR>>> {
    const results = await this.request.post<
      IntercomCursorPaginatedList<Contact<ATTR>>
    >('contacts/search', {
      query: {
        field: 'email',
        operator: '=',
        value: email,
      },
      pagination,
    });

    return results;
  }

  /**
   * Gets the raw contacts result which will need to be paginated if more than the maximum results
   * are returned.  It is generally easier to use `getContactsPaginated` as it will iterate and unwrap
   * the data for you.
   *
   * This result is not paginated
   *
   * @docs [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)
   * @docs [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   */
  async getContacts<ATTR extends AnyObj>(
    this: IntercomlyClient,
    searchParams?:
      | string
      | {
          per_page?: string;
          starting_after?: string;
        }
      | URLSearchParams,
  ): Promise<IntercomCursorPaginatedList<Contact<ATTR>>> {
    return this.request.get<IntercomCursorPaginatedList<Contact<ATTR>>>(
      'contacts',
      getSearchParams(searchParams),
    );
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
  async *getContactsByEmailPaginated<ATTR>(
    this: IntercomlyClient,
    /**
     * The number of items returned in a single response.
     * Default is 50.
     * Max is 150.
     */
    email: string,
    /**
     * Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds
     * before throwing an error?
     */
    handleRateLimiting = true,
  ): AsyncGenerator<Contact<ATTR>[], void, void> {
    for await (const contacts of this.request.postCursorPaginated<
      Contact<ATTR>
    >(
      'contacts/search',
      {
        query: {
          field: 'email',
          operator: '=',
          value: email,
        },
      },
      handleRateLimiting,
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
  async *getContactsPaginated<ATTR>(
    this: IntercomlyClient,
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
  ): AsyncGenerator<Contact<ATTR>[], void, void> {
    for await (const contacts of this.request.getCursorPaginated<Contact<ATTR>>(
      'contacts',
      perPage,
      handleRateLimiting,
    )) {
      yield contacts;
    }
  }
}
