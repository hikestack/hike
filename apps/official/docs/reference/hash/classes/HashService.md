[**@hikestack/hash**](/official/reference/hash/index.md) • **Docs**

***

[@hikestack/hash](/official/reference/hash/globals.md) / HashService

# Class: HashService

## Implements

- [`IHash`](/official/reference/hash/interfaces/IHash.md)

## Constructors

### new HashService()

> **new HashService**(`options`): [`HashService`](/official/reference/hash/classes/HashService.md)

#### Parameters

• **options**: [`HashModuleOptions`](/official/reference/hash/interfaces/HashModuleOptions.md)

#### Returns

[`HashService`](/official/reference/hash/classes/HashService.md)

#### Defined in

[packages/hash/src/hash.service.ts:8](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/hash.service.ts#L8)

## Properties

### adapter

> `protected` `readonly` **adapter**: [`IHash`](/official/reference/hash/interfaces/IHash.md)

#### Defined in

[packages/hash/src/hash.service.ts:7](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/hash.service.ts#L7)

## Methods

### compare()

> **compare**(`value`, `hash`): `Promise`\<`boolean`\>

#### Parameters

• **value**: `string`

• **hash**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IHash`](/official/reference/hash/interfaces/IHash.md).[`compare`](/official/reference/hash/interfaces/IHash.md#compare)

#### Defined in

[packages/hash/src/hash.service.ts:22](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/hash.service.ts#L22)

***

### genSalt()

> **genSalt**(`rounds`?): `Promise`\<`string`\>

#### Parameters

• **rounds?**: `number`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IHash`](/official/reference/hash/interfaces/IHash.md).[`genSalt`](/official/reference/hash/interfaces/IHash.md#gensalt)

#### Defined in

[packages/hash/src/hash.service.ts:26](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/hash.service.ts#L26)

***

### hash()

> **hash**(`value`, `salt`?): `Promise`\<`string`\>

#### Parameters

• **value**: `string`

• **salt?**: `string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IHash`](/official/reference/hash/interfaces/IHash.md).[`hash`](/official/reference/hash/interfaces/IHash.md#hash)

#### Defined in

[packages/hash/src/hash.service.ts:18](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/hash.service.ts#L18)
