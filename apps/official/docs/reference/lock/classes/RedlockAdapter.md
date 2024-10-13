[**@hikestack/lock**](/official/reference/lock/index.md) • **Docs**

***

[@hikestack/lock](/official/reference/lock/globals.md) / RedlockAdapter

# Class: RedlockAdapter

## Implements

- [`ILock`](/official/reference/lock/interfaces/ILock.md)

## Constructors

### new RedlockAdapter()

> **new RedlockAdapter**(`options`): [`RedlockAdapter`](/official/reference/lock/classes/RedlockAdapter.md)

#### Parameters

• **options**

• **options.clients**: `Iterable`\<`Client`, `any`, `any`\>

• **options.scripts?**

• **options.scripts.acquireScript?**: `string` \| (`script`) => `string`

• **options.scripts.extendScript?**: `string` \| (`script`) => `string`

• **options.scripts.releaseScript?**: `string` \| (`script`) => `string`

• **options.settings?**: `Partial`\<`Settings`\>

#### Returns

[`RedlockAdapter`](/official/reference/lock/classes/RedlockAdapter.md)

#### Defined in

[packages/lock/src/adapters/redlock/redlock.adapter.ts:11](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/adapters/redlock/redlock.adapter.ts#L11)

## Properties

### lock

> `protected` `readonly` **lock**: `Redlock`

#### Defined in

[packages/lock/src/adapters/redlock/redlock.adapter.ts:9](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/adapters/redlock/redlock.adapter.ts#L9)

## Methods

### using()

> **using**\<`T`, `O`, `S`\>(`resources`, `duration`, `settingsOrRoutine`, `routine`?): `Promise`\<`T`\>

#### Type Parameters

• **T**

• **O** = `any`

• **S** = `RedlockAbortSignal`

#### Parameters

• **resources**: `string`[]

• **duration**: `number`

• **settingsOrRoutine**: `Partial`\<`O`\> \| (`signal`) => `Promise`\<`T`\>

• **routine?**

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ILock`](/official/reference/lock/interfaces/ILock.md).[`using`](/official/reference/lock/interfaces/ILock.md#using)

#### Defined in

[packages/lock/src/adapters/redlock/redlock.adapter.ts:29](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/adapters/redlock/redlock.adapter.ts#L29)
