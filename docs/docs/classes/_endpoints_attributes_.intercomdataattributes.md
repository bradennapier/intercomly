[intercomly](../README.md) › [Globals](../globals.md) › ["endpoints/attributes"](../modules/_endpoints_attributes_.md) › [IntercomDataAttributes](_endpoints_attributes_.intercomdataattributes.md)

# Class: IntercomDataAttributes

## Hierarchy

* **IntercomDataAttributes**

  ↳ [IntercomlyClient](_client_.intercomlyclient.md)

## Index

### Methods

* [getDataAttributes](_endpoints_attributes_.intercomdataattributes.md#getdataattributes)

## Methods

###  getDataAttributes

▸ **getDataAttributes**(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `model`: "contact" | "company", `includeArchived`: boolean): *Promise‹[DataAttribute](../modules/_types_.md#dataattribute)[]›*

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
