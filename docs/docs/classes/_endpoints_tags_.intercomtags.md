[intercomly](../README.md) › [Globals](../globals.md) › ["endpoints/tags"](../modules/_endpoints_tags_.md) › [IntercomTags](_endpoints_tags_.intercomtags.md)

# Class: IntercomTags

## Hierarchy

* **IntercomTags**

  ↳ [IntercomlyClient](_client_.intercomlyclient.md)

## Index

### Methods

* [attachTag](_endpoints_tags_.intercomtags.md#attachtag)
* [deleteTag](_endpoints_tags_.intercomtags.md#deletetag)
* [detachTag](_endpoints_tags_.intercomtags.md#detachtag)
* [getTags](_endpoints_tags_.intercomtags.md#gettags)
* [upsertTag](_endpoints_tags_.intercomtags.md#upserttag)

## Methods

###  attachTag

▸ **attachTag**‹**T**›(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `to`: T, ...`args`: Parameters‹AttachTagArgs[T]›): *Promise‹ReturnType‹AttachTagArgs[T]››*

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

###  getTags

▸ **getTags**(`this`: [IntercomlyClient](_client_.intercomlyclient.md)): *Promise‹[Tag](../modules/_types_.md#tag)[]›*

*Defined in [endpoints/tags.ts:30](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/endpoints/tags.ts#L30)*

Gets all the tags for a workspace

**`docs`** [Get Tags](https://developers.intercom.com/intercom-api-reference/reference#list-tags-for-an-app)

**Parameters:**

Name | Type |
------ | ------ |
`this` | [IntercomlyClient](_client_.intercomlyclient.md) |

**Returns:** *Promise‹[Tag](../modules/_types_.md#tag)[]›*

___

###  upsertTag

▸ **upsertTag**(`this`: [IntercomlyClient](_client_.intercomlyclient.md), `tagName`: string, `tagId?`: undefined | string): *Promise‹[Tag](../modules/_types_.md#tag)›*

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
