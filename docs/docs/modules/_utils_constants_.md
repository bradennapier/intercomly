[intercomly](../README.md) › [Globals](../globals.md) › ["utils/constants"](_utils_constants_.md)

# Module: "utils/constants"

## Index

### Variables

* [SEARCH_NESTED_OPERATORS](_utils_constants_.md#const-search_nested_operators)
* [SEARCH_OPERATORS](_utils_constants_.md#const-search_operators)
* [VERSION](_utils_constants_.md#const-version)

### Object literals

* [DEFAULT_OPTIONS](_utils_constants_.md#const-default_options)

## Variables

### `Const` SEARCH_NESTED_OPERATORS

• **SEARCH_NESTED_OPERATORS**: *["AND", "OR"]* = ['AND', 'OR'] as const

*Defined in [utils/constants.ts:13](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/constants.ts#L13)*

___

### `Const` SEARCH_OPERATORS

• **SEARCH_OPERATORS**: *["=", "!=", "IN", "NIN", ">", "<", "~", "!~", "^", "$"]* = [
  /** Equals (case sensitive) */
  '=',
  /** Doesn't equal (case sensitive) */
  '!=',
  /**
   * In (Shortcut for `OR !` queries)
   * Values must be in Array
   */
  'IN',
  /**
   * Not In (Shortcut for `OR` queries)
   * Values must be in Array
   */
  'NIN',
  /** Greater (or equal) than */
  '>',
  /** Lower (or equal) than */
  '<',
  /** Contains */
  '~',
  /** Doesn't contain */
  '!~',
  /** Starts With */
  '^',
  /** Ends With */
  '$',
] as const

*Defined in [utils/constants.ts:15](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/constants.ts#L15)*

___

### `Const` VERSION

• **VERSION**: *"__VERSION__"* = "__VERSION__"

*Defined in [utils/constants.ts:7](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/constants.ts#L7)*

The released version, this will be updated by semantic-release during the release
phase.

## Object literals

### `Const` DEFAULT_OPTIONS

### ▪ **DEFAULT_OPTIONS**: *object*

*Defined in [utils/constants.ts:9](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/constants.ts#L9)*

###  keepalive

• **keepalive**: *true* = true

*Defined in [utils/constants.ts:10](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/constants.ts#L10)*
