[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Result

# Interface: Result\<TData, TParams\>

## Type Parameters

• **TData**

• **TParams** *extends* `any`[]

## Properties

### cancel()

> **cancel**: () => `void`

#### Returns

`void`

#### Defined in

[use-query/types.ts:120](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L120)

***

### data?

> `optional` **data**: `TData`

#### Defined in

[use-query/types.ts:117](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L117)

***

### error?

> `optional` **error**: `Error`

#### Defined in

[use-query/types.ts:118](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L118)

***

### loading

> **loading**: `boolean`

#### Defined in

[use-query/types.ts:116](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L116)

***

### mutate()

> **mutate**: (`data`?) => `void`

#### Parameters

• **data?**: `TData` \| (`oldData`?) => `undefined` \| `TData`

#### Returns

`void`

#### Defined in

[use-query/types.ts:125](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L125)

***

### params

> **params**: [] \| `TParams`

#### Defined in

[use-query/types.ts:119](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L119)

***

### refresh()

> **refresh**: () => `void`

#### Returns

`void`

#### Defined in

[use-query/types.ts:121](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L121)

***

### refreshAsync()

> **refreshAsync**: () => `Promise`\<`TData`\>

#### Returns

`Promise`\<`TData`\>

#### Defined in

[use-query/types.ts:122](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L122)

***

### run()

> **run**: (...`params`) => `void`

#### Parameters

• ...**params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:123](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L123)

***

### runAsync()

> **runAsync**: (...`params`) => `Promise`\<`TData`\>

#### Parameters

• ...**params**: `TParams`

#### Returns

`Promise`\<`TData`\>

#### Defined in

[use-query/types.ts:124](https://github.com/hikestack/hike/blob/f4b2991827d0518d26a98943c6929d7779aa398c/packages/hooks/src/use-query/types.ts#L124)
