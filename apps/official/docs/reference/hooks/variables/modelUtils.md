[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / modelUtils

# Variable: modelUtils

> `const` **modelUtils**: `object`

## Type declaration

### deepClone()

#### Type Parameters

• **T**

#### Parameters

• **obj**: `T`

• **getRefSet** = `getDefaultRefSet`

#### Returns

`T`

### devtools()

devtools

This is to connect with [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools).
Limitation: Only plain objects/values are supported.

#### Type Parameters

• **T** *extends* `object`

#### Parameters

• **proxyObject**: `T`

• **options?**: `any`

#### Returns

() => `void` \| `undefined`

#### Example

```ts
import { devtools } from 'valtio/utils'
const state = proxy({ count: 0, text: 'hello' })
const unsub = devtools(state, { name: 'state name', enabled: true })
```

### proxyMap()

proxyMap

This is to create a proxy which mimic the native Map behavior.
The API is the same as Map API

#### Type Parameters

• **K**

• **V**

#### Parameters

• **entries?**: `Iterable`\<readonly [`K`, `V`], `any`, `any`\>

#### Returns

`Map`\<`K`, `V`\> & `object`

#### Example

```ts
import { proxyMap } from 'valtio/utils'
const state = proxyMap([["key", "value"]])

//can be used inside a proxy as well
const state = proxy({
  count: 1,
  map: proxyMap()
})

// When using an object as a key, you can wrap it with `ref` so it's not proxied
// this is useful if you want to preserve the key equality
import { ref } from 'valtio'

const key = ref({})
state.set(key, "value")
state.get(key) //value

const key = {}
state.set(key, "value")
state.get(key) //undefined
```

### proxySet()

proxySet

This is to create a proxy which mimic the native Set behavior.
The API is the same as Set API

#### Type Parameters

• **T**

#### Parameters

• **initialValues?**: `Iterable`\<`T`, `any`, `any`\>

#### Returns

`Set`\<`T`\> & `object`

#### Example

```ts
import { proxySet } from 'valtio/utils'
const state = proxySet([1,2,3])
//can be used inside a proxy as well
const state = proxy({
  count: 1,
  set: proxySet()
})
```

### subscribeKey()

subscribeKey

The subscribeKey utility enables subscription to a primitive subproperty of a given state proxy.
Subscriptions created with subscribeKey will only fire when the specified property changes.
notifyInSync: same as the parameter to subscribe(); true disables batching of subscriptions.

#### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **proxyObject**: `T`

• **key**: `K`

• **callback**

• **notifyInSync?**: `boolean`

#### Returns

`Function`

##### Returns

`void`

#### Example

```ts
import { subscribeKey } from 'valtio/utils'
subscribeKey(state, 'count', (v) => console.log('state.count has changed to', v))
```

### useProxy()

useProxy

Takes a proxy and returns a new proxy which you can use in both react render
and in callbacks. The root reference is replaced on every render, but the
keys (and subkeys) below it are stable until they're intentionally mutated.
For the best ergonomics, you can export a custom hook from your store, so you
don't have to figure out a separate name for the hook reference. E.g.:

export const store = proxy(initialState)
export const useStore = () => useProxy(store)
// in the component file:
function Cmp() {
  const store = useStore()
  return <button onClick={() => {store.count++}}>{store.count}</button>
}

#### Type Parameters

• **T** *extends* `object`

#### Parameters

• **proxy**: `T`

• **options?**: `Options`

#### Returns

`T`

A new proxy which you can use in the render as well as in callbacks.

### watch()

watch

Creates a reactive effect that automatically tracks proxy objects and
reevaluates everytime one of the tracked proxy objects updates. It returns
a cleanup function to stop the reactive effect from reevaluating.

Callback is invoked immediately to detect the tracked objects.

Callback passed to `watch` receives a `get` function that "tracks" the
passed proxy object.

Watch callbacks may return an optional cleanup function, which is evaluated
whenever the callback reevaluates or when the cleanup function returned by
`watch` is evaluated.

`watch` calls inside `watch` are also automatically tracked and cleaned up
whenever the parent `watch` reevaluates.

#### Parameters

• **callback**: `WatchCallback`

• **options?**: `WatchOptions`

#### Returns

`Cleanup`

A cleanup function that stops the callback from reevaluating and
also performs cleanups registered into `watch`.

## Defined in

[use-model/index.ts:7](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hooks/src/use-model/index.ts#L7)
