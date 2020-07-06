[intercomly](../README.md) › [Globals](../globals.md) › ["endpoints/tags"](_endpoints_tags_.md)

# Module: "endpoints/tags"

## Index

### Classes

* [IntercomTags](../classes/_endpoints_tags_.intercomtags.md)

### Type aliases

* [AttachTagArgs](_endpoints_tags_.md#attachtagargs)
* [DetachTagArgs](_endpoints_tags_.md#detachtagargs)

## Type aliases

###  AttachTagArgs

Ƭ **AttachTagArgs**: *object*

*Defined in [endpoints/tags.ts:4](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L4)*

#### Type declaration:

* **company**(): *function*

  * (`tagName`: string, `company`: object | object, ...`companies`: Array‹object | object›): *Promise‹[Tag](_types_.md#tag)›*

* **contact**(): *function*

  * (`contactId`: string, `tagId`: string): *Promise‹[Tag](_types_.md#tag)›*

* **conversation**(): *function*

  * (`conversationId`: string, `tagId`: string, `adminId`: string): *Promise‹[Tag](_types_.md#tag)›*

___

###  DetachTagArgs

Ƭ **DetachTagArgs**: *object*

*Defined in [endpoints/tags.ts:18](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L18)*

#### Type declaration:

* **company**: *AttachTagArgs["company"]*

* **contact**: *AttachTagArgs["contact"]*

* **conversation**(): *function*

  * (`conversationId`: string, `tagId`: string): *Promise‹[Tag](_types_.md#tag)›*
