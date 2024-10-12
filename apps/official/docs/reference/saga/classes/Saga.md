[**@hikestack/saga**](/official/reference/saga/index.md) • **Docs**

***

[@hikestack/saga](/official/reference/saga/globals.md) / Saga

# Class: `abstract` Saga\<T\>

## Extends

- `EventEmitter`

## Extended by

- [`BullSaga`](/official/reference/saga/classes/BullSaga.md)

## Type Parameters

• **T** = `any`

## Constructors

### new Saga()

> **new Saga**\<`T`\>(`tasks`): [`Saga`](/official/reference/saga/classes/Saga.md)\<`T`\>

#### Parameters

• **tasks**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

#### Returns

[`Saga`](/official/reference/saga/classes/Saga.md)\<`T`\>

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/saga/src/saga.ts:10](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/saga.ts#L10)

## Properties

### tasks

> `protected` `readonly` **tasks**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

#### Defined in

[packages/saga/src/saga.ts:10](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/saga.ts#L10)

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

`EventEmitter.captureRejections`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:36

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/official/reference/saga/classes/BullSaga.md#capturerejectionsymbol)

#### Inherited from

`EventEmitter.captureRejectionSymbol`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:30

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`EventEmitter.defaultMaxListeners`

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

`EventEmitter.errorMonitor`

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

`EventEmitter.addListener`

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

`EventEmitter.emit`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:740

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/globals.d.ts:745

***

### execute()

> **execute**(`data`?, `opts`?): `Promise`\<`void`\>

#### Parameters

• **data?**: `T`

• **opts?**: [`SagaExecuteOptions`](/official/reference/saga/interfaces/SagaExecuteOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/saga/src/saga.ts:14](https://github.com/hikestack/hike/blob/06a9d1e14c74906090ab3c3c676c170cb9199e53/packages/saga/src/saga.ts#L14)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

`EventEmitter.getMaxListeners`

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

`EventEmitter.listenerCount`

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

`EventEmitter.listeners`

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

`EventEmitter.off`

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

`EventEmitter.on`

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

`EventEmitter.once`

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

`EventEmitter.prependListener`

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

`EventEmitter.prependOnceListener`

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

`EventEmitter.rawListeners`

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

`EventEmitter.removeAllListeners`

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

`EventEmitter.removeListener`

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

`EventEmitter.setMaxListeners`

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

`EventEmitter.listenerCount`

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

`EventEmitter.on`

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

`EventEmitter.once`

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

`EventEmitter.once`

##### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/events.d.ts:14
