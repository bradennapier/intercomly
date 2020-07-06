import { URLSearchParams } from 'url';

import type { IntercomlyClient } from 'client';

import {
  Contact,
  IntercomCursorPaginatedList,
  ContactCreateUser,
  AnyObj,
  ContactCreate,
  ContactCreateLead,
  SearchPagination,
} from 'types';

import { getSearchParams } from 'utils/helpers';

/**
 * The abstract class which extends the client with contact methods.
 */
export abstract class IntercomContacts {
  /**
   * Creates a new contact (user or lead).
   *
   * @category Contacts
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
   *
   * @category Contacts
   */
  createUser<ATTR extends AnyObj>(
    this: IntercomlyClient,
    contact: ContactCreateUser<ATTR>,
  ): Promise<Contact<ATTR, 'user'>> {
    return this.createContact<ATTR, 'user'>(contact);
  }

  /**
   * Creates a new lead contact
   *
   * @category Contacts
   */
  createLead<ATTR extends AnyObj>(
    this: IntercomlyClient,
    contact: ContactCreateLead<ATTR>,
  ): Promise<Contact<ATTR, 'lead'>> {
    return this.createContact<ATTR, 'lead'>(contact);
  }

  /**
   *
   * @category Contacts
   *
   * @param this
   * @param contactId
   * @param contact
   */
  updateContact<
    ATTR extends AnyObj,
    R extends Contact['role'] = Contact['role']
  >(
    this: IntercomlyClient,
    contactId: string,
    contact: ContactCreate<R, ATTR>,
  ): Promise<Contact<ATTR, R>> {
    return this.request.put<Contact<ATTR, R>>(`contacts/${contactId}`, contact);
  }

  /**
   * First checks for a given user by calling `getContactByExternalId` then calls update or
   * create based on if any user is found by the provided `externalId` (within the `contact`
   * parameter).
   *
   * @category Contacts
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
   * Archives a single contact by the Intercom internal id.  Optionally provide a second
   * argument to determine if the user should instead be unarchived.  Defaults to true.
   *
   * ```ts
   *  // archive the user
   *  await client.archiveContact('123456')
   *  // unarchive the user now
   *  await client.archiveContact('123456', false)
   * ```
   *
   * @category Contacts
   */
  async archiveContact<ID extends string>(
    this: IntercomlyClient,
    contactId: ID,
    /**
     * By setting this to false, you can specify to unarchive a user instead.
     */
    archive = true,
  ): Promise<{ id: ID; object: 'contact'; archived: 'true' | 'false' }> {
    if (!contactId) {
      throw new Error(
        '[ERROR] | intercomly | archiveContact | property "contactId" is required',
      );
    }
    return this.request.post<{
      id: ID;
      object: 'contact';
      archived: 'true' | 'false';
    }>(`contacts/${contactId}/${archive ? 'archive' : 'unarchive'}`);
  }

  /**
   * Deletes a single contact by the Intercom internal id.
   *
   * @category Contacts
   */
  async deleteContact<ID extends string>(
    this: IntercomlyClient,
    contactId: ID,
  ): Promise<{ id: ID; object: 'contact'; deleted: 'true' | 'false' }> {
    if (!contactId) {
      throw new Error(
        '[ERROR] | intercomly | deleteContact | property "contactId" is required',
      );
    }
    return this.request.delete<{
      id: ID;
      object: 'contact';
      deleted: 'true' | 'false';
    }>(`contacts/${contactId}`);
  }

  /**
   * Retrieves the details of a single contact by their intercom-provided id.
   *
   * @category Contacts
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
   *
   * @category Contacts
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
   * @category Contacts
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
    pagination?: SearchPagination,
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
   * @category Contacts
   */
  async getContacts<ATTR extends AnyObj>(
    this: IntercomlyClient,
    searchParams?: string | SearchPagination | URLSearchParams,
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
   * ```ts
   *  for await (const contacts of client.getContactsPaginated()) {
   *    console.log('Contacts Batch: ', contacts)
   *  }
   * ```
   *
   * @docs [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)
   * @docs [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)
   * @docs [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)
   * @category Contacts
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
