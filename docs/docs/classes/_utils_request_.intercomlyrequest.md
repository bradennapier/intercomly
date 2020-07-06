[intercomly](../README.md) › [Globals](../globals.md) › ["utils/request"](../modules/_utils_request_.md) › [IntercomlyRequest](_utils_request_.intercomlyrequest.md)

# Class: IntercomlyRequest

## Hierarchy

* **IntercomlyRequest**

## Index

### Constructors

* [constructor](_utils_request_.intercomlyrequest.md#constructor)

### Properties

* [#client](_utils_request_.intercomlyrequest.md##client)

### Methods

* [delete](_utils_request_.intercomlyrequest.md#delete)
* [get](_utils_request_.intercomlyrequest.md#get)
* [getCursorPaginated](_utils_request_.intercomlyrequest.md#getcursorpaginated)
* [post](_utils_request_.intercomlyrequest.md#post)
* [postCursorPaginated](_utils_request_.intercomlyrequest.md#postcursorpaginated)
* [put](_utils_request_.intercomlyrequest.md#put)
* [rawRequest](_utils_request_.intercomlyrequest.md#rawrequest)

## Constructors

###  constructor

\+ **new IntercomlyRequest**(`options`: [ClientOptions](../modules/_types_.md#clientoptions), `requestOptions`: Parameters<typeof got["extend"]>[0]): *[IntercomlyRequest](_utils_request_.intercomlyrequest.md)*

*Defined in [utils/request.ts:88](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L88)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ClientOptions](../modules/_types_.md#clientoptions) | - |
`requestOptions` | Parameters<typeof got["extend"]>[0] | {} |

**Returns:** *[IntercomlyRequest](_utils_request_.intercomlyrequest.md)*

## Properties

###  #client

• **#client**: *typeof got*

*Defined in [utils/request.ts:88](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L88)*

## Methods

###  delete

▸ **delete**‹**R**›(`path`: string, `body?`: undefined | object): *Promise‹R›*

*Defined in [utils/request.ts:171](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L171)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body?` | undefined &#124; object |

**Returns:** *Promise‹R›*

___

###  get

▸ **get**‹**R**›(`path`: string, `searchParams?`: GotRequestOptions["searchParams"]): *Promise‹R›*

*Defined in [utils/request.ts:135](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L135)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`searchParams?` | GotRequestOptions["searchParams"] |

**Returns:** *Promise‹R›*

___

###  getCursorPaginated

▸ **getCursorPaginated**‹**R**›(`path`: string, `perPage?`: undefined | number, `handleRateLimiting`: boolean): *AsyncGenerator‹R[], void, void›*

*Defined in [utils/request.ts:191](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L191)*

AsyncGenerator to automatically recurse through the cursor-based endpoints.  Optionally have the
generator automatically retry requests when rate limited.

**`docs`** [Pagination (Cursor)](https://developers.intercom.com/intercom-api-reference/reference#pagination-cursor)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`perPage?` | undefined &#124; number | - |
`handleRateLimiting` | boolean | true |

**Returns:** *AsyncGenerator‹R[], void, void›*

___

###  post

▸ **post**‹**R**›(`path`: string, `body?`: undefined | object): *Promise‹R›*

*Defined in [utils/request.ts:143](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L143)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body?` | undefined &#124; object |

**Returns:** *Promise‹R›*

___

###  postCursorPaginated

▸ **postCursorPaginated**‹**R**›(`path`: string, `_body`: object, `handleRateLimiting`: boolean): *AsyncGenerator‹R[], void, void›*

*Defined in [utils/request.ts:249](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L249)*

AsyncGenerator to automatically recurse through the cursor-based endpoints.  Optionally have the
generator automatically retry requests when rate limited. This method is used when handling pagination
via a post request and body (search for contacts).

**`docs`** [Pagination & Sorting (Search)](https://developers.intercom.com/intercom-api-reference/reference#pagination-search)

**`docs`** [Rate Limiting](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting)

**Type parameters:**

▪ **R**

**Parameters:**

▪ **path**: *string*

▪ **_body**: *object*

Name | Type |
------ | ------ |
`pagination?` | undefined &#124; object |

▪`Default value`  **handleRateLimiting**: *boolean*= true

**Returns:** *AsyncGenerator‹R[], void, void›*

___

###  put

▸ **put**‹**R**›(`path`: string, `body?`: undefined | object): *Promise‹R›*

*Defined in [utils/request.ts:157](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L157)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body?` | undefined &#124; object |

**Returns:** *Promise‹R›*

___

###  rawRequest

▸ **rawRequest**‹**R**›(`method`: HTTPAlias, `path`: string, `options`: undefined | GotRequestOptions): *Promise‹GotResponse‹R››*

*Defined in [utils/request.ts:118](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L118)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`method` | HTTPAlias |
`path` | string |
`options` | undefined &#124; GotRequestOptions |

**Returns:** *Promise‹GotResponse‹R››*
