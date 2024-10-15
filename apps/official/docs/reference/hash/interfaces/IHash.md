[**@hikestack/hash**](/official/reference/hash/index.md) • **Docs**

***

[@hikestack/hash](/official/reference/hash/globals.md) / IHash

# Interface: IHash

## Methods

### compare()

> **compare**(`data`, `hash`): `Promise`\<`boolean`\>

#### Parameters

• **data**: `string`

• **hash**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/hash/src/interfaces/hash.interface.ts:3](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/interfaces/hash.interface.ts#L3)

***

### genSalt()

> **genSalt**(`rounds`?): `Promise`\<`string`\>

#### Parameters

• **rounds?**: `number`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/hash/src/interfaces/hash.interface.ts:4](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/interfaces/hash.interface.ts#L4)

***

### hash()

> **hash**(`data`, `salt`?): `Promise`\<`string`\>

#### Parameters

• **data**: `string`

• **salt?**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/hash/src/interfaces/hash.interface.ts:2](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/interfaces/hash.interface.ts#L2)
