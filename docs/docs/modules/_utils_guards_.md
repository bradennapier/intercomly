[intercomly](../README.md) › [Globals](../globals.md) › ["utils/guards"](_utils_guards_.md)

# Module: "utils/guards"

## Index

### Functions

* [isContactQuery](_utils_guards_.md#iscontactquery)
* [isContactSearchOperator](_utils_guards_.md#iscontactsearchoperator)
* [isCustomAttributesQuery](_utils_guards_.md#iscustomattributesquery)
* [isNestedQuery](_utils_guards_.md#isnestedquery)
* [isNestedSearchOperator](_utils_guards_.md#isnestedsearchoperator)

## Functions

###  isContactQuery

▸ **isContactQuery**‹**ATTR**, **F**›(`query`: any): *query is SearchPropertyQuery<F, ATTR>*

*Defined in [utils/guards.ts:22](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/guards.ts#L22)*

**Type parameters:**

▪ **ATTR**: *[AnyObj](_types_.md#anyobj)*

▪ **F**: *[SearchableFields](_types_.md#searchablefields)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | any |

**Returns:** *query is SearchPropertyQuery<F, ATTR>*

___

###  isContactSearchOperator

▸ **isContactSearchOperator**(`op`: [SearchPropertyOperators](_types_.md#searchpropertyoperators) | [NestedSearchOperators](_types_.md#nestedsearchoperators)): *op is SearchPropertyOperators*

*Defined in [utils/guards.ts:29](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/guards.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | [SearchPropertyOperators](_types_.md#searchpropertyoperators) &#124; [NestedSearchOperators](_types_.md#nestedsearchoperators) |

**Returns:** *op is SearchPropertyOperators*

___

###  isCustomAttributesQuery

▸ **isCustomAttributesQuery**‹**ATTR**›(`query`: object): *query is SearchPropertyQuery<"custom_attributes", ATTR>*

*Defined in [utils/guards.ts:41](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/guards.ts#L41)*

**Type parameters:**

▪ **ATTR**: *[AnyObj](_types_.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | object |

**Returns:** *query is SearchPropertyQuery<"custom_attributes", ATTR>*

___

###  isNestedQuery

▸ **isNestedQuery**‹**ATTR**, **F**›(`query`: any): *query is SearchNestedQuery<ATTR, F>*

*Defined in [utils/guards.ts:15](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/guards.ts#L15)*

**Type parameters:**

▪ **ATTR**: *[AnyObj](_types_.md#anyobj)*

▪ **F**: *[SearchableFields](_types_.md#searchablefields)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | any |

**Returns:** *query is SearchNestedQuery<ATTR, F>*

___

###  isNestedSearchOperator

▸ **isNestedSearchOperator**(`op`: [SearchPropertyOperators](_types_.md#searchpropertyoperators) | [NestedSearchOperators](_types_.md#nestedsearchoperators)): *op is NestedSearchOperators*

*Defined in [utils/guards.ts:35](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/guards.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | [SearchPropertyOperators](_types_.md#searchpropertyoperators) &#124; [NestedSearchOperators](_types_.md#nestedsearchoperators) |

**Returns:** *op is NestedSearchOperators*
