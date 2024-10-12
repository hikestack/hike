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

[packages/lock/src/interfaces/lock.interface.ts:2](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/lock/src/interfaces/lock.interface.ts#L2)
