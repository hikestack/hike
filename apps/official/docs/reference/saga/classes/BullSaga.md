[**@hikestack/saga**](/official/reference/saga/index.md) • **Docs**

***

[@hikestack/saga](/official/reference/saga/globals.md) / BullSaga

# Class: BullSaga\<T\>

## Extends

- [`Saga`](/official/reference/saga/classes/Saga.md)\<`T`\>

## Type Parameters

• **T** = `any`

## Constructors

### new BullSaga()

> **new BullSaga**\<`T`\>(`tasks`, `queueOpts`, `workerOpts`?): [`BullSaga`](/official/reference/saga/classes/BullSaga.md)\<`T`\>

#### Parameters

• **tasks**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

• **queueOpts**: `QueueBaseOptions`

• **workerOpts?**: `Partial`\<`WorkerOptions`\>

#### Returns

[`BullSaga`](/official/reference/saga/classes/BullSaga.md)\<`T`\>

#### Overrides

[`Saga`](/official/reference/saga/classes/Saga.md).[`constructor`](/official/reference/saga/classes/Saga.md#constructors)

#### Defined in

[packages/saga/src/adapters/bullmq/bull.saga.ts:26](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/adapters/bullmq/bull.saga.ts#L26)

## Properties

### tasks

> `protected` `readonly` **tasks**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`tasks`](/official/reference/saga/classes/Saga.md#tasks)

#### Defined in

[packages/saga/src/adapters/bullmq/bull.saga.ts:27](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/adapters/bullmq/bull.saga.ts#L27)

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`captureRejections`](/official/reference/saga/classes/Saga.md#capturerejections)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:36

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/official/reference/saga/classes/BullSaga.md#capturerejectionsymbol)

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`captureRejectionSymbol`](/official/reference/saga/classes/Saga.md#capturerejectionsymbol)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:30

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`defaultMaxListeners`](/official/reference/saga/classes/Saga.md#defaultmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:37

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](/official/reference/saga/classes/BullSaga.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`errorMonitor`](/official/reference/saga/classes/Saga.md#errormonitor)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:29

## Methods

### addListener()

> **addListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`addListener`](/official/reference/saga/classes/Saga.md#addlistener)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:730

***

### emit()

> **emit**(`event`, ...`args`): `boolean`

#### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`emit`](/official/reference/saga/classes/Saga.md#emit)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:740

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`eventNames`](/official/reference/saga/classes/Saga.md#eventnames)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:745

***

### execute()

> **execute**(`data`, `opts`): `Promise`\<`void`\>

#### Parameters

• **data**: `T`

• **opts** = `...`

• **opts.timeout**: `number` = `30000`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Saga`](/official/reference/saga/classes/Saga.md).[`execute`](/official/reference/saga/classes/Saga.md#execute)

#### Defined in

[packages/saga/src/adapters/bullmq/bull.saga.ts:34](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/adapters/bullmq/bull.saga.ts#L34)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`getMaxListeners`](/official/reference/saga/classes/Saga.md#getmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:737

***

### listenerCount()

> **listenerCount**(`type`): `number`

#### Parameters

• **type**: `string` \| `symbol`

#### Returns

`number`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listenerCount`](/official/reference/saga/classes/Saga.md#listenercount)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:741

***

### listeners()

> **listeners**(`event`): `Function`[]

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listeners`](/official/reference/saga/classes/Saga.md#listeners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:738

***

### off()

> **off**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`off`](/official/reference/saga/classes/Saga.md#off)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:734

***

### on()

> **on**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`on`](/official/reference/saga/classes/Saga.md#on)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:731

***

### once()

> **once**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:732

***

### prependListener()

> **prependListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`prependListener`](/official/reference/saga/classes/Saga.md#prependlistener)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:743

***

### prependOnceListener()

> **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`prependOnceListener`](/official/reference/saga/classes/Saga.md#prependoncelistener)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:744

***

### rawListeners()

> **rawListeners**(`event`): `Function`[]

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`rawListeners`](/official/reference/saga/classes/Saga.md#rawlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:739

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`removeAllListeners`](/official/reference/saga/classes/Saga.md#removealllisteners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:735

***

### removeListener()

> **removeListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`removeListener`](/official/reference/saga/classes/Saga.md#removelistener)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:733

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`setMaxListeners`](/official/reference/saga/classes/Saga.md#setmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:736

***

### traverseTree()

> `protected` **traverseTree**\<`N`\>(`node`, `callback`): `void`

#### Type Parameters

• **N** *extends* `Node`

#### Parameters

• **node**: `N`

• **callback**

#### Returns

`void`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`traverseTree`](/official/reference/saga/classes/Saga.md#traversetree)

#### Defined in

[packages/saga/src/saga.ts:18](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/saga.ts#L18)

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `event`): `number`

#### Parameters

• **emitter**: `EventEmitter`

• **event**: `string` \| `symbol`

#### Returns

`number`

#### Deprecated

since v4.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listenerCount`](/official/reference/saga/classes/Saga.md#listenercount-1)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:18

***

### on()

> `static` **on**(`emitter`, `event`): `AsyncIterableIterator`\<`any`\>

#### Parameters

• **emitter**: `EventEmitter`

• **event**: `string`

#### Returns

`AsyncIterableIterator`\<`any`\>

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`on`](/official/reference/saga/classes/Saga.md#on-1)

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:15

***

### once()

#### once(emitter, event)

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `NodeEventTarget`

• **event**: `string` \| `symbol`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once-1)

##### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:13

#### once(emitter, event)

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `DOMEventTarget`

• **event**: `string`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once-1)

##### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:14
