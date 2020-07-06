[intercomly](../README.md) › [Globals](../globals.md) › ["utils/request"](_utils_request_.md)

# Module: "utils/request"

## Index

### Classes

* [IntercomlyRequest](../classes/_utils_request_.intercomlyrequest.md)

### Variables

* [CLIENT](_utils_request_.md#const-client)

### Functions

* [handleHTTPError](_utils_request_.md#handlehttperror)
* [handlePaginationError](_utils_request_.md#handlepaginationerror)
* [isIntercomError](_utils_request_.md#isintercomerror)

## Variables

### `Const` CLIENT

• **CLIENT**: *Got‹›* = got.extend({
  prefixUrl: 'https://api.intercom.io',
  responseType: 'json',
  http2: true,
  headers: {
    Accept: 'application/json',
    'User-Agent': `intercomly/${VERSION}`,
    'Intercom-Version': '2.0',
  },
})

*Defined in [utils/request.ts:20](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L20)*

## Functions

###  handleHTTPError

▸ **handleHTTPError**(`error`: [RequestError](_types_.md#requesterror)): *void*

*Defined in [utils/request.ts:42](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L42)*

Takes in an error from a request and makes the error object easier to consume for intercom errors.
This means that the error object itself will have the `errors` array if it is present as well as
we will set the error.message and error.code to the first error in the errors list by default so they
are not undefined / generic.

**Parameters:**

Name | Type |
------ | ------ |
`error` | [RequestError](_types_.md#requesterror) |

**Returns:** *void*

___

###  handlePaginationError

▸ **handlePaginationError**(`error`: [RequestError](_types_.md#requesterror), `failures`: number, `handleRateLimiting`: boolean): *Promise‹void›*

*Defined in [utils/request.ts:66](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L66)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`error` | [RequestError](_types_.md#requesterror) | - |
`failures` | number | - |
`handleRateLimiting` | boolean | true |

**Returns:** *Promise‹void›*

___

###  isIntercomError

▸ **isIntercomError**(`body`: any): *body is IntercomErrorList*

*Defined in [utils/request.ts:32](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/request.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *body is IntercomErrorList*
