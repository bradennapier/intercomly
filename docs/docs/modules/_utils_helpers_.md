[intercomly](../README.md) › [Globals](../globals.md) › ["utils/helpers"](_utils_helpers_.md)

# Module: "utils/helpers"

## Index

### Functions

* [createIntercomUserHash](_utils_helpers_.md#createintercomuserhash)
* [getSearchParams](_utils_helpers_.md#getsearchparams)

## Functions

###  createIntercomUserHash

▸ **createIntercomUserHash**(`id`: string, `secret`: string): *string*

*Defined in [utils/helpers.ts:9](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/helpers.ts#L9)*

Create the hash required for identify verification

**`docs`** [Intercom Identity Verification](https://www.intercom.com/help/en/articles/183-enable-identity-verification-for-web-and-mobile)

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`secret` | string |

**Returns:** *string*

___

###  getSearchParams

▸ **getSearchParams**(`params`: undefined | string | object | URLSearchParams): *undefined | URLSearchParams*

*Defined in [utils/helpers.ts:17](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/helpers.ts#L17)*

Helper to get URLSearchParams from a request in a way that got will not complain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | undefined &#124; string &#124; object &#124; URLSearchParams |

**Returns:** *undefined | URLSearchParams*
