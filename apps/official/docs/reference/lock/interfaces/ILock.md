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

[packages/lock/src/interfaces/lock.interface.ts:2](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/lock/src/interfaces/lock.interface.ts#L2)
