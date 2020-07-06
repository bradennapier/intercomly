[intercomly](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Type aliases

* [AddressableList](_types_.md#addressablelist)
* [AddressableObject](_types_.md#addressableobject)
* [AnyObj](_types_.md#anyobj)
* [ClientOptions](_types_.md#clientoptions)
* [Contact](_types_.md#contact)
* [ContactCreate](_types_.md#contactcreate)
* [ContactCreateLead](_types_.md#contactcreatelead)
* [ContactCreateUser](_types_.md#contactcreateuser)
* [CustomAttributeQueryFormatted](_types_.md#customattributequeryformatted)
* [DataAttribute](_types_.md#dataattribute)
* [EmptyObj](_types_.md#emptyobj)
* [Expand](_types_.md#expand)
* [IntercomCursorPaginatedList](_types_.md#intercomcursorpaginatedlist)
* [IntercomErrorCodes](_types_.md#intercomerrorcodes)
* [IntercomErrorList](_types_.md#intercomerrorlist)
* [IntercomList](_types_.md#intercomlist)
* [IntercomPagesCursor](_types_.md#intercompagescursor)
* [Location](_types_.md#location)
* [NestedSearchOperators](_types_.md#nestedsearchoperators)
* [RequestError](_types_.md#requesterror)
* [SearchContactsQuery](_types_.md#searchcontactsquery)
* [SearchNestedQuery](_types_.md#searchnestedquery)
* [SearchOperators](_types_.md#searchoperators)
* [SearchPagination](_types_.md#searchpagination)
* [SearchPropertyOperators](_types_.md#searchpropertyoperators)
* [SearchPropertyQuery](_types_.md#searchpropertyquery)
* [SearchSort](_types_.md#searchsort)
* [SearchableAttributes](_types_.md#searchableattributes)
* [SearchableContact](_types_.md#searchablecontact)
* [SearchableContactFields](_types_.md#searchablecontactfields)
* [SearchableContactRaw](_types_.md#searchablecontactraw)
* [SearchableFields](_types_.md#searchablefields)
* [Segment](_types_.md#segment)
* [SinglePropertyAllowedIn](_types_.md#singlepropertyallowedin)
* [SocialProfile](_types_.md#socialprofile)
* [Tag](_types_.md#tag)

## Type aliases

###  AddressableList

Ƭ **AddressableList**: *object*

*Defined in [types.ts:185](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L185)*

#### Type declaration:

* **data**: *Array‹[AddressableObject](_types_.md#addressableobject)‹T››*

* **has_more**: *boolean*

* **total_count**: *number*

* **type**: *"list"*

* **url**: *string*

___

###  AddressableObject

Ƭ **AddressableObject**: *object*

*Defined in [types.ts:176](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L176)*

#### Type declaration:

* **id**: *string*

* **type**: *T*

* **url**: *string*

___

###  AnyObj

Ƭ **AnyObj**: *object*

*Defined in [types.ts:197](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L197)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  ClientOptions

Ƭ **ClientOptions**: *object*

*Defined in [types.ts:5](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L5)*

#### Type declaration:

* **keepalive**? : *undefined | false | true*

* **token**: *string*

___

###  Contact

Ƭ **Contact**: *object*

*Defined in [types.ts:274](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L274)*

#### Type declaration:

* **android_app_name**: *null | string*

* **android_app_version**: *null | string*

* **android_device**: *null | string*

* **android_last_seen_at**: *null | number*

* **android_os_version**: *null | string*

* **android_sdk_version**: *null | string*

* **avatar**: *null | string*

* **browser**: *null | string*

* **browser_language**: *null | string*

* **browser_version**: *null | string*

* **companies**: *[AddressableList](_types_.md#addressablelist)‹"company"›*

* **created_at**: *number*

* **custom_attributes**: *ATTR*

* **email**: *string*

* **external_id**: *string*

* **has_hard_bounced**: *boolean*

* **id**: *string*

* **ios_app_name**: *null | string*

* **ios_app_version**: *null | string*

* **ios_device**: *null | string*

* **ios_last_seen_at**: *null | number*

* **ios_os_version**: *null | string*

* **ios_sdk_version**: *null | string*

* **language_override**: *null | string*

* **last_contacted_at**: *null | number*

* **last_email_clicked_at**: *null | number*

* **last_email_opened_at**: *null | number*

* **last_replied_at**: *null | number*

* **last_seen_at**: *number*

* **location**: *[Location](_types_.md#location)*

* **marked_email_as_spam**: *boolean*

* **name**: *string*

* **notes**: *[AddressableList](_types_.md#addressablelist)‹"note"›*

* **os**: *null | string*

* **owner_id**: *null | number*

* **phone**: *null | string*

* **role**: *R*

* **signed_up_at**: *number*

* **social_profiles**: *[IntercomList](_types_.md#intercomlist)‹[SocialProfile](_types_.md#socialprofile)›*

* **tags**: *[AddressableList](_types_.md#addressablelist)‹"tag"›*

* **type**: *"contact"*

* **unsubscribed_from_emails**: *boolean*

* **updated_at**: *number*

* **workspace_id**: *string*

___

###  ContactCreate

Ƭ **ContactCreate**: *object*

*Defined in [types.ts:205](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L205)*

___

###  ContactCreateLead

Ƭ **ContactCreateLead**: *[ContactCreate](_types_.md#contactcreate)‹"lead", ATTR›*

*Defined in [types.ts:269](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L269)*

___

###  ContactCreateUser

Ƭ **ContactCreateUser**: *[ContactCreate](_types_.md#contactcreate)‹"user", ATTR›*

*Defined in [types.ts:264](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L264)*

___

###  CustomAttributeQueryFormatted

Ƭ **CustomAttributeQueryFormatted**: *object*

*Defined in [types.ts:434](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L434)*

#### Type declaration:

* **field**: *string*

* **operator**: *[SearchPropertyOperators](_types_.md#searchpropertyoperators)*

* **value**: *ATTR[F] | ATTR[F][]*

___

###  DataAttribute

Ƭ **DataAttribute**: *object*

*Defined in [types.ts:592](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L592)*

Data Attributes are a type of metadata used to describe your contact and company models.
These include standard and custom attributes. By using the data attributes endpoint, you
can get the global list of attributes for your workspace, as well as create and archive
custom attributes.

**`see`** https://developers.intercom.com/intercom-api-reference/reference#data-attribute-model

#### Type declaration:

* **admin_id**? : *undefined | string*

* **api_writable**: *boolean*

* **archived**: *false*

* **created_at**? : *undefined | number*

* **custom**: *boolean*

* **data_type**: *"string" | "integer" | "float" | "boolean" | "date"*

* **description**: *""*

* **full_name**: *string*

* **label**: *"paid_subscriber"*

* **model**: *"contact" | "company"*

* **name**: *string*

* **options**? : *string[]*

* **type**: *"data_attribute"*

* **ui_writable**: *boolean*

* **updated_at**? : *undefined | number*

___

###  EmptyObj

Ƭ **EmptyObj**: *object*

*Defined in [types.ts:203](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L203)*

#### Type declaration:

___

###  Expand

Ƭ **Expand**: *T extends infer O ? object : never*

*Defined in [types.ts:719](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L719)*

Can be used to expand types while debugging such that when you encounter a type
like `DataAttribute`, you can use `Expand<DataAttribute>` to see the resolved type.

**`tip`** 
 If results are being cut off you can set "noErrorTruncation" in your tsconfig.json,
 although this is a deprecated option so should be used for debugging only.

**`example`** 
 const results = await client.getDataAttributes()
 type Check = Expand<typeof result>;
 // Resolves to the following instead of DataAttribute[]:
 {
    type: "data_attribute";
    model: "contact" | "company";
    name: string;
    full_name: string;
    label: "paid_subscriber";
    description: "";
    data_type: "string" | "boolean" | "integer" | "float" | "date";
    options?: string[] | undefined;
    api_writable: boolean;
    ui_writable: boolean;
    custom: boolean;
    archived: false;
    admin_id?: string | undefined;
    created_at?: number | undefined;
    updated_at?: number | undefined;
 }[]

___

###  IntercomCursorPaginatedList

Ƭ **IntercomCursorPaginatedList**: *[IntercomList](_types_.md#intercomlist)‹T› & object*

*Defined in [types.ts:109](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L109)*

___

###  IntercomErrorCodes

Ƭ **IntercomErrorCodes**: *"server_error" | "client_error" | "type_mismatch" | "parameter_not_found" | "parameter_invalid" | "action_forbidden" | "conflict" | "api_plan_restricted" | "rate_limit_exceeded" | "unsupported" | "token_revoked" | "token_blocked" | "token_not_found" | "token_unauthorized" | "token_expired" | "missing_authorization" | "retry_after" | "job_closed" | "not_restorable" | "team_not_found" | "team_unavailable" | "admin_not_found"*

*Defined in [types.ts:37](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L37)*

___

###  IntercomErrorList

Ƭ **IntercomErrorList**: *object*

*Defined in [types.ts:61](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L61)*

#### Type declaration:

* **errors**: *Array‹object›*

* **request_id**: *string*

* **type**: *"error.list"*

___

###  IntercomList

Ƭ **IntercomList**: *object*

*Defined in [types.ts:93](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L93)*

#### Type declaration:

* **data**: *T[]*

* **type**: *"list"*

___

###  IntercomPagesCursor

Ƭ **IntercomPagesCursor**: *object*

*Defined in [types.ts:98](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L98)*

#### Type declaration:

* **next**(): *object*

  * **page**: *number*

  * **starting_after**: *string*

* **page**: *number*

* **per_page**: *number*

* **total_pages**: *number*

* **type**: *"pages"*

___

###  Location

Ƭ **Location**: *object*

*Defined in [types.ts:169](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L169)*

#### Type declaration:

* **city**: *null | string*

* **country**: *null | string*

* **region**: *null | string*

* **type**: *"location"*

___

###  NestedSearchOperators

Ƭ **NestedSearchOperators**: *typeof SEARCH_NESTED_OPERATORS[number]*

*Defined in [types.ts:548](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L548)*

Accepted search operators to create nested search queries

**`docs`** - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)

___

###  RequestError

Ƭ **RequestError**: *HTTPError & object*

*Defined in [types.ts:80](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L80)*

___

###  SearchContactsQuery

Ƭ **SearchContactsQuery**: *object*

*Defined in [types.ts:529](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L529)*

#### Type declaration:

* **pagination**? : *[SearchPagination](_types_.md#searchpagination)*

* **query**: *[SearchPropertyQuery](_types_.md#searchpropertyquery)‹F, ATTR› | [SearchNestedQuery](_types_.md#searchnestedquery)‹ATTR, F›*

* **sort**? : *[SearchSort](_types_.md#searchsort)*

___

###  SearchNestedQuery

Ƭ **SearchNestedQuery**: *object*

*Defined in [types.ts:518](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L518)*

#### Type declaration:

* **operator**: *OP*

* **value**: *Array‹[SearchNestedQuery](_types_.md#searchnestedquery)‹ATTR, F›› | Array‹[SearchPropertyQuery](_types_.md#searchpropertyquery)‹F, ATTR››*

___

###  SearchOperators

Ƭ **SearchOperators**: *[NestedSearchOperators](_types_.md#nestedsearchoperators) | [SearchPropertyOperators](_types_.md#searchpropertyoperators)*

*Defined in [types.ts:562](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L562)*

Accepted search operators for both queries and nested queries.

**`docs`** - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)

___

###  SearchPagination

Ƭ **SearchPagination**: *object*

*Defined in [types.ts:575](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L575)*

#### Type declaration:

* **per_page**? : *undefined | number*

* **starting_after**? : *undefined | string*

___

###  SearchPropertyOperators

Ƭ **SearchPropertyOperators**: *typeof SEARCH_OPERATORS[number]*

*Defined in [types.ts:555](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L555)*

Accepted search operators for search queries.

**`docs`** - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)

___

###  SearchPropertyQuery

Ƭ **SearchPropertyQuery**: *F extends any ? object : never*

*Defined in [types.ts:507](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L507)*

___

###  SearchSort

Ƭ **SearchSort**: *object*

*Defined in [types.ts:564](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L564)*

#### Type declaration:

* **field**: *[SearchableFields](_types_.md#searchablefields)*

* **order**? : *"ascending" | "decending"*

___

###  SearchableAttributes

Ƭ **SearchableAttributes**: *[SinglePropertyAllowedIn](_types_.md#singlepropertyallowedin)‹ATTR›*

*Defined in [types.ts:432](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L432)*

This is a special convention to keep type safety that we allow.  When searching you may
provide an object instead of value which is
{ custom_attributes: { [ONE KEY OF Contact['custom_attributes']] : ValueOfAttribute } }

___

###  SearchableContact

Ƭ **SearchableContact**: *O extends infer OBJ ? object : never*

*Defined in [types.ts:497](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L497)*

___

###  SearchableContactFields

Ƭ **SearchableContactFields**: *"id" | "name" | "role" | "avatar" | "owner_id" | "email" | "phone" | "external_id" | "created_at" | "signed_up_at" | "updated_at" | "last_seen_at" | "last_contacted_at" | "last_replied_at" | "last_email_opened_at" | "last_email_clicked_at" | "language_override" | "browser" | "browser_language" | "os" | "unsubscribed_from_emails" | "marked_email_as_spam" | "has_hard_bounced" | "ios_last_seen_at" | "ios_app_version" | "ios_device" | "ios_os_version" | "ios_sdk_version" | "android_last_seen_at" | "android_app_version" | "android_device" | "android_app_name" | "android_sdk_version"*

*Defined in [types.ts:443](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L443)*

___

###  SearchableContactRaw

Ƭ **SearchableContactRaw**: *Pick‹[Contact](_types_.md#contact), [SearchableContactFields](_types_.md#searchablecontactfields)› & object*

*Defined in [types.ts:484](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L484)*

___

###  SearchableFields

Ƭ **SearchableFields**: *keyof SearchableContactRaw<EmptyObj>*

*Defined in [types.ts:541](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L541)*

The fields that can be used to search for contacts.

___

###  Segment

Ƭ **Segment**: *object*

*Defined in [types.ts:125](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L125)*

A segment is a group of your contacts defined by rules that you set. Contacts are
automatically added to the segment every time the contact updates to match those rules.
You can use Search for contacts to find contacts that match the same rules.

**`docs`** - [Segment](https://developers.intercom.com/intercom-api-reference/reference#segment-model)

#### Type declaration:

* **count**? : *undefined | number*

* **created_at**: *number*

* **id**: *string*

* **name**: *string*

* **person_type**: *Contact["role"]*

* **type**: *"segment"*

* **updated_at**: *number*

___

###  SinglePropertyAllowedIn

Ƭ **SinglePropertyAllowedIn**: *[Expand](_types_.md#expand)‹object[keyof T]›*

*Defined in [types.ts:26](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L26)*

Only a single property of the given type is allowed:
{ one: string; two: number } -> { one: string; two?: undefined } | { two: number; one?: undefined }

___

###  SocialProfile

Ƭ **SocialProfile**: *object*

*Defined in [types.ts:161](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L161)*

#### Type declaration:

* **name**: *string*

* **type**: *"social_profile"*

* **url**: *string*

___

###  Tag

Ƭ **Tag**: *object*

*Defined in [types.ts:679](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/types.ts#L679)*

#### Type declaration:

* **id**: *string*

* **name**: *string*

* **type**: *"tag"*
