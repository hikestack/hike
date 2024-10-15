[**@hikestack/lock**](/official/reference/lock/index.md) • **Docs**

***

[@hikestack/lock](/official/reference/lock/globals.md) / ILock

# Interface: ILock

## Methods

### using()

> **using**\<`T`, `O`, `S`\>(`resources`, `duration`, `settingsOrRoutine`, `routine`?): `Promise`\<`T`\>

#### Type Parameters

• **T**

• **O** = `any`

• **S** = `AbortSignal` & `object`

#### Parameters

• **resources**: `string`[]

• **duration**: `number`

• **settingsOrRoutine**: `Partial`\<`O`\> \| (`signal`) => `Promise`\<`T`\>

• **routine?**

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/lock/src/interfaces/lock.interface.ts:2](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/lock/src/interfaces/lock.interface.ts#L2)
