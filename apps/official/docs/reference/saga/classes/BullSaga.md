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

[packages/saga/src/adapters/bullmq/bull.saga.ts:26](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/saga/src/adapters/bullmq/bull.saga.ts#L26)

## Properties

### tasks

> `protected` `readonly` **tasks**: [`ITask`](/official/reference/saga/interfaces/ITask.md)\<`any`\>[]

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`tasks`](/official/reference/saga/classes/Saga.md#tasks)

#### Defined in

[packages/saga/src/adapters/bullmq/bull.saga.ts:27](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/saga/src/adapters/bullmq/bull.saga.ts#L27)

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`captureRejections`](/official/reference/saga/classes/Saga.md#capturerejections)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:325

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/official/reference/saga/classes/BullSaga.md#capturerejectionsymbol)

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`captureRejectionSymbol`](/official/reference/saga/classes/Saga.md#capturerejectionsymbol)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:320

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`defaultMaxListeners`](/official/reference/saga/classes/Saga.md#defaultmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:326

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

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:319

## Methods

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

#### Type Parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`[captureRejectionSymbol]`](/official/reference/saga/classes/Saga.md#%5Bcapturerejectionsymbol%5D)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:94

***

### addListener()

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`addListener`](/official/reference/saga/classes/Saga.md#addlistener)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:390

***

### emit()

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import EventEmitter from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`boolean`

#### Since

v0.1.26

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`emit`](/official/reference/saga/classes/Saga.md#emit)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:646

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import EventEmitter from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`eventNames`](/official/reference/saga/classes/Saga.md#eventnames)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:705

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

[packages/saga/src/adapters/bullmq/bull.saga.ts:34](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/saga/src/adapters/bullmq/bull.saga.ts#L34)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](/official/reference/saga/classes/BullSaga.md#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`getMaxListeners`](/official/reference/saga/classes/Saga.md#getmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:562

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening to the event named `eventName`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event being listened for

• **listener?**: `Function`

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listenerCount`](/official/reference/saga/classes/Saga.md#listenercount)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:652

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listeners`](/official/reference/saga/classes/Saga.md#listeners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:575

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`off`](/official/reference/saga/classes/Saga.md#off)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:535

***

### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName` and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v0.1.101

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`on`](/official/reference/saga/classes/Saga.md#on)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:421

***

### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v0.3.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:450

***

### prependListener()

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName` and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`prependListener`](/official/reference/saga/classes/Saga.md#prependlistener)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:670

***

### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`prependOnceListener`](/official/reference/saga/classes/Saga.md#prependoncelistener)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:686

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`rawListeners`](/official/reference/saga/classes/Saga.md#rawlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:605

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`removeAllListeners`](/official/reference/saga/classes/Saga.md#removealllisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:546

***

### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`removeListener`](/official/reference/saga/classes/Saga.md#removelistener)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:530

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`setMaxListeners`](/official/reference/saga/classes/Saga.md#setmaxlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:556

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

[packages/saga/src/saga.ts:18](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/saga/src/saga.ts#L18)

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\> \| `DOMEventTarget`

• **name**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v15.2.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`getEventListeners`](/official/reference/saga/classes/Saga.md#geteventlisteners)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:291

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The emitter to query

• **eventName**: `string` \| `symbol`

The event name

#### Returns

`number`

#### Since

v0.9.12

#### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`listenerCount`](/official/reference/saga/classes/Saga.md#listenercount-1)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:263

***

### on()

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\>

```js
import { on, EventEmitter } from 'node:events';

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

• **eventName**: `string`

The name of the event being listened for

• **options?**: `StaticEventEmitterOptions`

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Since

v13.6.0, v12.16.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`on`](/official/reference/saga/classes/Saga.md#on-1)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:242

***

### once()

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

• **emitter**: `NodeEventTarget`

• **eventName**: `string` \| `symbol`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once-1)

##### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:178

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `DOMEventTarget`

• **eventName**: `string`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`once`](/official/reference/saga/classes/Saga.md#once-1)

##### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:183

***

### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

```js
import {
  setMaxListeners,
  EventEmitter
} from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

• **n?**: `number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

• ...**eventTargets?**: (`EventEmitter`\<`DefaultEventMap`\> \| `DOMEventTarget`)[]

#### Returns

`void`

#### Since

v15.4.0

#### Inherited from

[`Saga`](/official/reference/saga/classes/Saga.md).[`setMaxListeners`](/official/reference/saga/classes/Saga.md#setmaxlisteners-1)

#### Defined in

node\_modules/.pnpm/@types+node@16.18.112/node\_modules/@types/node/events.d.ts:309
