[**@hikestack/hash**](/official/reference/hash/index.md) • **Docs**

***

[@hikestack/hash](/official/reference/hash/globals.md) / BcryptAdapter

# Class: BcryptAdapter

## Implements

- [`IHash`](/official/reference/hash/interfaces/IHash.md)

## Constructors

### new BcryptAdapter()

> **new BcryptAdapter**(): [`BcryptAdapter`](/official/reference/hash/classes/BcryptAdapter.md)

#### Returns

[`BcryptAdapter`](/official/reference/hash/classes/BcryptAdapter.md)

## Methods

### compare()

> **compare**(`data`, `hash`): `Promise`\<`boolean`\>

#### Parameters

• **data**: `string`

• **hash**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IHash`](/official/reference/hash/interfaces/IHash.md).[`compare`](/official/reference/hash/interfaces/IHash.md#compare)

#### Defined in

[packages/hash/src/adapters/bcrypt.adapter.ts:10](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/adapters/bcrypt.adapter.ts#L10)

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

[packages/hash/src/adapters/bcrypt.adapter.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/adapters/bcrypt.adapter.ts#L14)

***

### hash()

> **hash**(`data`, `salt`?): `Promise`\<`string`\>

#### Parameters

• **data**: `string`

• **salt?**: `string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IHash`](/official/reference/hash/interfaces/IHash.md).[`hash`](/official/reference/hash/interfaces/IHash.md#hash)

#### Defined in

[packages/hash/src/adapters/bcrypt.adapter.ts:6](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/adapters/bcrypt.adapter.ts#L6)
