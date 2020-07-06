[intercomly](../README.md) › [Globals](../globals.md) › ["client"](../modules/_client_.md) › [IntercomlyClient](_client_.intercomlyclient.md)

# Class: IntercomlyClient

## Hierarchy

* [IntercomDataAttributes](_endpoints_attributes_.intercomdataattributes.md)

* [IntercomContacts](_endpoints_contacts_.intercomcontacts.md)

* [IntercomSearch](_endpoints_search_.intercomsearch.md)

* [IntercomTags](_endpoints_tags_.intercomtags.md)

  ↳ **IntercomlyClient**

## Index

### Constructors

* [constructor](_client_.intercomlyclient.md#constructor)

### Properties

* [request](_client_.intercomlyclient.md#request)
* [createIntercomUserHash](_client_.intercomlyclient.md#static-createintercomuserhash)

### Contacts Methods

* [archiveContact](_client_.intercomlyclient.md#archivecontact)
* [createContact](_client_.intercomlyclient.md#createcontact)
* [createLead](_client_.intercomlyclient.md#createlead)
* [createUser](_client_.intercomlyclient.md#createuser)
* [deleteContact](_client_.intercomlyclient.md#deletecontact)
* [getContact](_client_.intercomlyclient.md#getcontact)
* [getContactByExternalId](_client_.intercomlyclient.md#getcontactbyexternalid)
* [getContacts](_client_.intercomlyclient.md#getcontacts)
* [getContactsByEmail](_client_.intercomlyclient.md#getcontactsbyemail)
* [getContactsPaginated](_client_.intercomlyclient.md#getcontactspaginated)
* [updateContact](_client_.intercomlyclient.md#updatecontact)
* [upsertContactByExternalId](_client_.intercomlyclient.md#upsertcontactbyexternalid)

### Other Methods

* [attachTag](_client_.intercomlyclient.md#attachtag)
* [deleteTag](_client_.intercomlyclient.md#deletetag)
* [detachTag](_client_.intercomlyclient.md#detachtag)
* [getDataAttributes](_client_.intercomlyclient.md#getdataattributes)
* [getTags](_client_.intercomlyclient.md#gettags)
* [searchContactsByEmailPaginated](_client_.intercomlyclient.md#searchcontactsbyemailpaginated)
* [searchContactsByRolePaginated](_client_.intercomlyclient.md#searchcontactsbyrolepaginated)
* [upsertTag](_client_.intercomlyclient.md#upserttag)

### Search Methods

* [searchContacts](_client_.intercomlyclient.md#searchcontacts)
* [searchContactsPaginated](_client_.intercomlyclient.md#searchcontactspaginated)

## Constructors

###  constructor

\+ **new IntercomlyClient**(`_options`: [ClientOptions](../modules/_types_.md#clientoptions)): *[IntercomlyClient](_client_.intercomlyclient.md)*

*Defined in [client.ts:18](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/client.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`_options` | [ClientOptions](../modules/_types_.md#clientoptions) |

**Returns:** *[IntercomlyClient](_client_.intercomlyclient.md)*

## Properties

###  request

• **request**: *Request*

*Defined in [client.ts:16](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/client.ts#L16)*

___

### `Static` createIntercomUserHash

▪ **createIntercomUserHash**: *[createIntercomUserHash](../modules/_utils_helpers_.md#createintercomuserhash)* = createIntercomUserHash

*Defined in [client.ts:18](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/client.ts#L18)*

## Contacts Methods

###  archiveContact

▸ **archiveContact**‹**ID**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `contactId`: ID, `archive`: boolean): *Promise‹object›*

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[archiveContact](_endpoints_contacts_.intercomcontacts.md#archivecontact)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[createContact](_endpoints_contacts_.intercomcontacts.md#createcontact)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[createLead](_endpoints_contacts_.intercomcontacts.md#createlead)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[createUser](_endpoints_contacts_.intercomcontacts.md#createuser)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[deleteContact](_endpoints_contacts_.intercomcontacts.md#deletecontact)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[getContact](_endpoints_contacts_.intercomcontacts.md#getcontact)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[getContactByExternalId](_endpoints_contacts_.intercomcontacts.md#getcontactbyexternalid)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[getContacts](_endpoints_contacts_.intercomcontacts.md#getcontacts)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[getContactsByEmail](_endpoints_contacts_.intercomcontacts.md#getcontactsbyemail)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[getContactsPaginated](_endpoints_contacts_.intercomcontacts.md#getcontactspaginated)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[updateContact](_endpoints_contacts_.intercomcontacts.md#updatecontact)*

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

*Inherited from [IntercomContacts](_endpoints_contacts_.intercomcontacts.md).[upsertContactByExternalId](_endpoints_contacts_.intercomcontacts.md#upsertcontactbyexternalid)*

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

___

## Other Methods

###  attachTag

▸ **attachTag**‹**T**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `to`: T, ...`args`: Parameters‹AttachTagArgs[T]›): *Promise‹ReturnType‹AttachTagArgs[T]››*

*Inherited from [IntercomTags](_endpoints_tags_.intercomtags.md).[attachTag](_endpoints_tags_.intercomtags.md#attachtag)*

*Defined in [endpoints/tags.ts:76](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L76)*

Attach a tag to a `contact`, `conversation`, or a `company`.

**`note`** 
 `company` expects the **tag name**, _not_ the **tag id** for the second parameter and allows multiple
 companies to be provided at once.

**`docs`** [Tag Contact](https://developers.intercom.com/intercom-api-reference/reference#tag-contact)

**`docs`** [Tag Conversation](https://developers.intercom.com/intercom-api-reference/reference#attach-a-tag-to-a-conversation)

**`docs`** [Tag Companies](https://developers.intercom.com/intercom-api-reference/reference#tag-companies)

**Type parameters:**

▪ **T**: *keyof AttachTagArgs*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`to` | T |
`...args` | Parameters‹AttachTagArgs[T]› |

**Returns:** *Promise‹ReturnType‹AttachTagArgs[T]››*

___

###  deleteTag

▸ **deleteTag**(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `id`: string): *Promise‹void›*

*Inherited from [IntercomTags](_endpoints_tags_.intercomtags.md).[deleteTag](_endpoints_tags_.intercomtags.md#deletetag)*

*Defined in [endpoints/tags.ts:61](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L61)*

Deletes a tag by the given tag id.

**`docs`** [Delete Tag](https://developers.intercom.com/intercom-api-reference/reference#delete-a-tag)

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`id` | string |

**Returns:** *Promise‹void›*

___

###  detachTag

▸ **detachTag**‹**T**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `from`: T, ...`args`: Parameters‹DetachTagArgs[T]›): *Promise‹ReturnType‹DetachTagArgs[T]››*

*Inherited from [IntercomTags](_endpoints_tags_.intercomtags.md).[detachTag](_endpoints_tags_.intercomtags.md#detachtag)*

*Defined in [endpoints/tags.ts:123](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L123)*

Attach a tag to a `contact`, `conversation`, or a `company`.

**`note`** 
 `company` expects the **tag name**, _not_ the **tag id** for the second parameter and allows multiple
 companies to be provided at once.

**`docs`** [Untag Contacts](https://developers.intercom.com/intercom-api-reference/reference#untag-contact)

**`docs`** [Untag Companies](https://developers.intercom.com/intercom-api-reference/reference#untag-companies)

**`docs`** [Untag Conversation](https://developers.intercom.com/intercom-api-reference/reference#detach-a-tag-from-a-conversation)

**Type parameters:**

▪ **T**: *keyof DetachTagArgs*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`from` | T |
`...args` | Parameters‹DetachTagArgs[T]› |

**Returns:** *Promise‹ReturnType‹DetachTagArgs[T]››*

___

###  getDataAttributes

▸ **getDataAttributes**(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `model`: "contact" | "company", `includeArchived`: boolean): *Promise‹[DataAttribute](../modules/_types_.md#dataattribute)[]›*

*Inherited from [IntercomDataAttributes](_endpoints_attributes_.intercomdataattributes.md).[getDataAttributes](_endpoints_attributes_.intercomdataattributes.md#getdataattributes)*

*Defined in [endpoints/attributes.ts:14](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/attributes.ts#L14)*

Gets the list of data attributes belonging to a workspace contacts or companies.

**`see`** https://developers.intercom.com/intercom-api-reference/reference#list-data-attributes

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) | - |
`model` | "contact" &#124; "company" | "contact" |
`includeArchived` | boolean | false |

**Returns:** *Promise‹[DataAttribute](../modules/_types_.md#dataattribute)[]›*

data attributes

___

###  getTags

▸ **getTags**(`this`: [IntercomlyClient](_client_.intercomlyclient.md)): *Promise‹[Tag](../modules/_types_.md#tag)[]›*

*Inherited from [IntercomTags](_endpoints_tags_.intercomtags.md).[getTags](_endpoints_tags_.intercomtags.md#gettags)*

*Defined in [endpoints/tags.ts:30](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L30)*

Gets all the tags for a workspace

**`docs`** [Get Tags](https://developers.intercom.com/intercom-api-reference/reference#list-tags-for-an-app)

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |

**Returns:** *Promise‹[Tag](../modules/_types_.md#tag)[]›*

___

###  searchContactsByEmailPaginated

▸ **searchContactsByEmailPaginated**‹**ATTR**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `email`: string, `options`: object): *AsyncGenerator‹[Contact](../modules/_types_.md#contact)‹ATTR›[], void, unknown›*

*Inherited from [IntercomSearch](_endpoints_search_.intercomsearch.md).[searchContactsByEmailPaginated](_endpoints_search_.intercomsearch.md#searchcontactsbyemailpaginated)*

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

*Inherited from [IntercomSearch](_endpoints_search_.intercomsearch.md).[searchContactsByRolePaginated](_endpoints_search_.intercomsearch.md#searchcontactsbyrolepaginated)*

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

###  upsertTag

▸ **upsertTag**(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `tagName`: string, `tagId?`: undefined | string): *Promise‹[Tag](../modules/_types_.md#tag)›*

*Inherited from [IntercomTags](_endpoints_tags_.intercomtags.md).[upsertTag](_endpoints_tags_.intercomtags.md#upserttag)*

*Defined in [endpoints/tags.ts:41](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L41)*

Creates or updates a tag in the workspace.  A tag can be renamed by supplying the tag id
as the second paramter with a new name for the tag.

**`docs`** [Create or update tag](https://developers.intercom.com/intercom-api-reference/reference#create-and-update-tags)

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |
`tagName` | string |
`tagId?` | undefined &#124; string |

**Returns:** *Promise‹[Tag](../modules/_types_.md#tag)›*

___

## Search Methods

###  searchContacts

▸ **searchContacts**‹**ATTR**, **F**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `_search`: [SearchContactsQuery](../modules/_types_.md#searchcontactsquery)‹ATTR, F›, `normalizeQuery`: boolean): *Promise‹[IntercomCursorPaginatedList](../modules/_types_.md#intercomcursorpaginatedlist)‹[Contact](../modules/_types_.md#contact)‹ATTR›››*

*Inherited from [IntercomSearch](_endpoints_search_.intercomsearch.md).[searchContacts](_endpoints_search_.intercomsearch.md#searchcontacts)*

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

*Inherited from [IntercomSearch](_endpoints_search_.intercomsearch.md).[searchContactsPaginated](_endpoints_search_.intercomsearch.md#searchcontactspaginated)*

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
