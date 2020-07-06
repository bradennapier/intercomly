[intercomly](../README.md) › [Globals](../globals.md) › ["utils/combinators"](_utils_combinators_.md)

# Module: "utils/combinators"

## Index

### Functions

* [take](_utils_combinators_.md#take)
* [takeAsync](_utils_combinators_.md#takeasync)

## Functions

###  take

▸ **take**‹**T**›(`n`: number, `gen`: Generator‹T›): *Generator‹T›*

*Defined in [utils/combinators.ts:31](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/combinators.ts#L31)*

Takes the next `n` results from a given AsyncGenerator

**`example`** 
 for (const result of take(3, gen)) {
   console.log('Result! ', result);
 }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`gen` | Generator‹T› |

**Returns:** *Generator‹T›*

___

###  takeAsync

▸ **takeAsync**‹**T**›(`n`: number, `gen`: AsyncGenerator‹T›): *AsyncGenerator‹T›*

*Defined in [utils/combinators.ts:9](https://github.com/bradennapier/intercomly/blob/c3e44e7/src/utils/combinators.ts#L9)*

Takes the next `n` results from a given AsyncGenerator

**`example`** 
 for await (const result of takeAsync(3, gen)) {
   console.log('Result! ', result);
 }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`gen` | AsyncGenerator‹T› |

**Returns:** *AsyncGenerator‹T›*
