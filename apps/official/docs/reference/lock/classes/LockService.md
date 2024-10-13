[**@hikestack/lock**](/official/reference/lock/index.md) • **Docs**

***

[@hikestack/lock](/official/reference/lock/globals.md) / LockService

# Class: LockService

## Implements

- [`ILock`](/official/reference/lock/interfaces/ILock.md)

## Constructors

### new LockService()

> **new LockService**(`options`): [`LockService`](/official/reference/lock/classes/LockService.md)

#### Parameters

• **options**: [`LockModuleOptions`](/official/reference/lock/interfaces/LockModuleOptions.md)

#### Returns

[`LockService`](/official/reference/lock/classes/LockService.md)

#### Defined in

[packages/lock/src/lock.service.ts:8](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/lock.service.ts#L8)

## Properties

### adapter

> `protected` `readonly` **adapter**: [`ILock`](/official/reference/lock/interfaces/ILock.md)

#### Defined in

[packages/lock/src/lock.service.ts:7](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/lock.service.ts#L7)

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

#### Implementation of

[`ILock`](/official/reference/lock/interfaces/ILock.md).[`using`](/official/reference/lock/interfaces/ILock.md#using)

#### Defined in

[packages/lock/src/lock.service.ts:18](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/lock/src/lock.service.ts#L18)
