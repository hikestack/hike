[**@hikestack/saga**](/official/reference/saga/index.md) • **Docs**

***

[@hikestack/saga](/official/reference/saga/globals.md) / ITask

# Interface: ITask\<T\>

## Type Parameters

• **T** = `any`

## Properties

### children?

> `optional` **children**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

#### Defined in

[packages/saga/src/interfaces/task.interface.ts:5](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/saga/src/interfaces/task.interface.ts#L5)

***

### name

> **name**: `string`

#### Defined in

[packages/saga/src/interfaces/task.interface.ts:2](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/saga/src/interfaces/task.interface.ts#L2)

## Methods

### commit()?

> `optional` **commit**(`target`): `Promise`\<`void`\>

#### Parameters

• **target**: `T`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/saga/src/interfaces/task.interface.ts:3](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/saga/src/interfaces/task.interface.ts#L3)

***

### rollback()?

> `optional` **rollback**(`target`): `Promise`\<`void`\>

#### Parameters

• **target**: `T`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/saga/src/interfaces/task.interface.ts:4](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/saga/src/interfaces/task.interface.ts#L4)
