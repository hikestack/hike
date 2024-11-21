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

[packages/hash/src/adapters/bcrypt.adapter.ts:9](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/adapters/bcrypt.adapter.ts#L9)

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

[packages/hash/src/adapters/bcrypt.adapter.ts:13](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/adapters/bcrypt.adapter.ts#L13)

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

[packages/hash/src/adapters/bcrypt.adapter.ts:5](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/hash/src/adapters/bcrypt.adapter.ts#L5)
