[intercomly](../README.md) › [Globals](../globals.md) › ["endpoints/search"](../modules/_endpoints_search_.md) › [IntercomSearch](_endpoints_search_.intercomsearch.md)

# Class: IntercomSearch

Provides custom helpers to conduct searches for contacts

**`docs`** - [Search for Contacts](https://developers.intercom.com/intercom-api-reference/reference#search-for-contacts)

## Hierarchy

* **IntercomSearch**

  ↳ [IntercomlyClient](_client_.intercomlyclient.md)

## Index

### Other Methods

* [searchContactsByEmailPaginated](_endpoints_search_.intercomsearch.md#searchcontactsbyemailpaginated)
* [searchContactsByRolePaginated](_endpoints_search_.intercomsearch.md#searchcontactsbyrolepaginated)

### Search Methods

* [searchContacts](_endpoints_search_.intercomsearch.md#searchcontacts)
* [searchContactsPaginated](_endpoints_search_.intercomsearch.md#searchcontactspaginated)

## Other Methods

###  searchContactsByEmailPaginated

▸ **searchContactsByEmailPaginated**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `email`: string, `options`: object): *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, unknown›*

*Defined in [endpoints/search.ts:142](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/search.ts#L142)*

An AsyncGenerator which allows easily recursing through the paginated contacts list.
By default each batch will include 50 results and the max is 150.  A third parameter
can be provided to indicate whether rate limiting should automatically be handled (this
defaults to true).

**`docs`** [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)

**`docs`** [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**`example`** 
 for await (const contacts of client.getContactsPaginated()) {
   console.log('Contacts Batch: ', contacts)
 }

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

▪ **this**: *[IntercomlyClient](_client_.intercomlyclient.md)*

▪ **email**: *string*

▪ **options**: *object*

Name | Type | Description |
------ | ------ | ------ |
`handleRateLimiting` | boolean | Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds before throwing an error? |
`pagination?` | [SearchPagination](../modules/_types_.md#searchpagination) | - |
`sort?` | [SearchSort](../modules/_types_.md#searchsort) | - |

**Returns:** *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, unknown›*

___

###  searchContactsByRolePaginated

▸ **searchContactsByRolePaginated**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `role`: Contact["role"], `options`: object): *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, unknown›*

*Defined in [endpoints/search.ts:191](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/search.ts#L191)*

An AsyncGenerator which allows easily recursing through the paginated contacts list.
By default each batch will include 50 results and the max is 150.  A third parameter
can be provided to indicate whether rate limiting should automatically be handled (this
defaults to true).

**`docs`** [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)

**`docs`** [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**`example`** 
 for await (const contacts of client.getContactsPaginated()) {
   console.log('Contacts Batch: ', contacts)
 }

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

▪ **this**: *[IntercomlyClient](_client_.intercomlyclient.md)*

▪ **role**: *Contact["role"]*

▪ **options**: *object*

Name | Type | Description |
------ | ------ | ------ |
`handleRateLimiting?` | undefined &#124; false &#124; true | Automatically handle rate limiting by retrying at 1 second intervals for up to 10 seconds before throwing an error? |
`pagination?` | [SearchPagination](../modules/_types_.md#searchpagination) | - |
`sort?` | [SearchSort](../modules/_types_.md#searchsort) | - |

**Returns:** *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, unknown›*

___

## Search Methods

###  searchContacts

▸ **searchContacts**‹**ATTR**, **F**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `_search`: [SearchContactsQuery](../modules/_types_.md#searchcontactsquery)‹ATTR, F›, `normalizeQuery`: boolean): *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

*Defined in [endpoints/search.ts:47](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/search.ts#L47)*

The raw search contacts function which allows you to search for contacts using queries and operators.
Nested operators (usign `AND` | `OR` allow up to 2 nested levels and each level may have a maximum of
**15 queries**)

**`docs`** - [Search for Contacts](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-fields)

**`docs`** - [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **F**: *[SearchableFields](../modules/_types_.md#searchablefields)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) | - |
`_search` | [SearchContactsQuery](../modules/_types_.md#searchcontactsquery)‹ATTR, F› | - |
`normalizeQuery` | boolean | true |

**Returns:** *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

___

###  searchContactsPaginated

▸ **searchContactsPaginated**‹**ATTR**, **F**, **S**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `search`: object, `handleRateLimiting`: boolean): *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, void›*

*Defined in [endpoints/search.ts:98](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/search.ts#L98)*

Searchs contacts paginated

**`template`** ATTR

**`template`** F

**`template`** S

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **F**: *[SearchableFields](../modules/_types_.md#searchablefields)*

▪ **S**: *[SearchContactsQuery](../modules/_types_.md#searchcontactsquery)‹ATTR, F›*

**Parameters:**

▪ **this**: *[IntercomlyClient](_client_.intercomlyclient.md)*

▪ **search**: *object*

Name | Type |
------ | ------ |
`pagination?` | [SearchPagination](../modules/_types_.md#searchpagination) |
`query` | S["query"] |
`sort?` | [SearchSort](../modules/_types_.md#searchsort) |

▪`Default value`  **handleRateLimiting**: *boolean*= true

**Returns:** *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, void›*

contacts paginated
