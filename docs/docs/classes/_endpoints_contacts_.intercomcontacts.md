[intercomly](../README.md) › [Globals](../globals.md) › ["endpoints/contacts"](../modules/_endpoints_contacts_.md) › [IntercomContacts](_endpoints_contacts_.intercomcontacts.md)

# Class: IntercomContacts

The abstract class which extends the client with contact methods.

## Hierarchy

* **IntercomContacts**

  ↳ [IntercomlyClient](_client_.intercomlyclient.md)

## Index

### Contacts Methods

* [archiveContact](_endpoints_contacts_.intercomcontacts.md#archivecontact)
* [createContact](_endpoints_contacts_.intercomcontacts.md#createcontact)
* [createLead](_endpoints_contacts_.intercomcontacts.md#createlead)
* [createUser](_endpoints_contacts_.intercomcontacts.md#createuser)
* [deleteContact](_endpoints_contacts_.intercomcontacts.md#deletecontact)
* [getContact](_endpoints_contacts_.intercomcontacts.md#getcontact)
* [getContactByExternalId](_endpoints_contacts_.intercomcontacts.md#getcontactbyexternalid)
* [getContacts](_endpoints_contacts_.intercomcontacts.md#getcontacts)
* [getContactsByEmail](_endpoints_contacts_.intercomcontacts.md#getcontactsbyemail)
* [getContactsPaginated](_endpoints_contacts_.intercomcontacts.md#getcontactspaginated)
* [updateContact](_endpoints_contacts_.intercomcontacts.md#updatecontact)
* [upsertContactByExternalId](_endpoints_contacts_.intercomcontacts.md#upsertcontactbyexternalid)

## Contacts Methods

###  archiveContact

▸ **archiveContact**‹**ID**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contactId`: ID, `archive`: boolean): *Promise‹object›*

*Defined in [endpoints/contacts.ts:120](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L120)*

Archives a single contact by the Intercom internal id.  Optionally provide a second
argument to determine if the user should instead be unarchived.  Defaults to true.

```ts
 // archive the user
 await client.archiveContact('123456')
 // unarchive the user now
 await client.archiveContact('123456', false)
```

**Type parameters:**

▪ **ID**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) | - |
`contactId` | ID | - |
`archive` | boolean | true |

**Returns:** *Promise‹object›*

___

###  createContact

▸ **createContact**‹**ATTR**, **R**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contact`: [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR›): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

*Defined in [endpoints/contacts.ts:26](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L26)*

Creates a new contact (user or lead).

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **R**: *Contact["role"]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contact` | [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR› |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

___

###  createLead

▸ **createLead**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contact`: [ContactCreateLead](../modules/_types_.md#contactcreatelead)‹ATTR›): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, "lead"››*

*Defined in [endpoints/contacts.ts:53](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L53)*

Creates a new lead contact

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contact` | [ContactCreateLead](../modules/_types_.md#contactcreatelead)‹ATTR› |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, "lead"››*

___

###  createUser

▸ **createUser**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contact`: [ContactCreateUser](../modules/_types_.md#contactcreateuser)‹ATTR›): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, "user"››*

*Defined in [endpoints/contacts.ts:41](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L41)*

Creates a new user contact

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contact` | [ContactCreateUser](../modules/_types_.md#contactcreateuser)‹ATTR› |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, "user"››*

___

###  deleteContact

▸ **deleteContact**‹**ID**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contactId`: ID): *Promise‹object›*

*Defined in [endpoints/contacts.ts:145](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L145)*

Deletes a single contact by the Intercom internal id.

**Type parameters:**

▪ **ID**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contactId` | ID |

**Returns:** *Promise‹object›*

___

###  getContact

▸ **getContact**‹**ATTR**, **R**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contactId`: string): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

*Defined in [endpoints/contacts.ts:166](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L166)*

Retrieves the details of a single contact by their intercom-provided id.

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **R**: *Contact["role"]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contactId` | string |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

___

###  getContactByExternalId

▸ **getContactByExternalId**‹**ATTR**, **R**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `externalId`: string): *Promise‹undefined | [Contact](../modules/_types_.md#contact)‹ATTR, R››*

*Defined in [endpoints/contacts.ts:183](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L183)*

Retrieves the details of a single contact by their unique external id. If no user is
found this will resolve to `undefined`.

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **R**: *Contact["role"]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`externalId` | string |

**Returns:** *Promise‹undefined | [Contact](../modules/_types_.md#contact)‹ATTR, R››*

___

###  getContacts

▸ **getContacts**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `searchParams?`: string | [SearchPagination](../modules/_types_.md#searchpagination) | URLSearchParams): *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

*Defined in [endpoints/contacts.ts:251](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L251)*

Gets the raw contacts result which will need to be paginated if more than the maximum results
are returned.  It is generally easier to use `getContactsPaginated` as it will iterate and unwrap
the data for you.

This result is not paginated

**`docs`** [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)

**`docs`** [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`searchParams?` | string &#124; [SearchPagination](../modules/_types_.md#searchpagination) &#124; URLSearchParams |

**Returns:** *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

___

###  getContactsByEmail

▸ **getContactsByEmail**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `email`: string, `pagination?`: [SearchPagination](../modules/_types_.md#searchpagination)): *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

*Defined in [endpoints/contacts.ts:214](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L214)*

Retrieves contacts which have the provided email.  This may return multiple contacts and
returns the raw IntercomCursorPaginatedList.

**`note`** 
 To automatically iterate through pages you can use `getContactsByEmailPaginated` which
 returns an `AsyncGenerator`.

**`docs`** [Search Contacts](https://developers.intercom.com/intercom-api-reference/reference#search-for-contacts)

**`docs`** [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`email` | string |
`pagination?` | [SearchPagination](../modules/_types_.md#searchpagination) |

**Returns:** *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

___

###  getContactsPaginated

▸ **getContactsPaginated**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `perPage?`: undefined | number, `handleRateLimiting`: boolean): *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, void›*

*Defined in [endpoints/contacts.ts:278](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L278)*

An AsyncGenerator which allows easily recursing through the paginated contacts list.
By default each batch will include 50 results and the max is 150.  A third parameter
can be provided to indicate whether rate limiting should automatically be handled (this
defaults to true).

```ts
 for await (const contacts of client.getContactsPaginated()) {
   console.log('Contacts Batch: ', contacts)
 }
```

**`docs`** [List Contacts](https://developers.intercom.com/intercom-api-reference/reference#list-contacts)

**`docs`** [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**Type parameters:**

▪ **ATTR**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) | - |
`perPage?` | undefined &#124; number | - |
`handleRateLimiting` | boolean | true |

**Returns:** *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, void›*

___

###  updateContact

▸ **updateContact**‹**ATTR**, **R**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contactId`: string, `contact`: [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR›): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

*Defined in [endpoints/contacts.ts:68](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L68)*

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **R**: *Contact["role"]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) | - |
`contactId` | string | - |
`contact` | [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR› |   |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R››*

___

###  upsertContactByExternalId

▸ **upsertContactByExternalId**‹**ATTR**, **R**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contact`: [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR› & object): *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R› | undefined›*

*Defined in [endpoints/contacts.ts:86](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/contacts.ts#L86)*

First checks for a given user by calling `getContactByExternalId` then calls update or
create based on if any user is found by the provided `externalId` (within the `contact`
parameter).

**Type parameters:**

▪ **ATTR**: *[AnyObj](../modules/_types_.md#anyobj)*

▪ **R**: *Contact["role"]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`contact` | [ContactCreate](../modules/_types_.md#contactcreate)‹R, ATTR› & object |

**Returns:** *Promise‹[Contact](../modules/_types_.md#contact)‹ATTR, R› | undefined›*
