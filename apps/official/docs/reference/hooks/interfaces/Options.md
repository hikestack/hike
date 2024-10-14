[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Options

# Interface: Options\<TData, TParams\>

## Type Parameters

• **TData**

• **TParams** *extends* `any`[]

## Properties

### cacheKey?

> `optional` **cacheKey**: `string`

#### Defined in

[use-query/types.ts:82](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L82)

***

### cacheTime?

> `optional` **cacheTime**: `number`

#### Defined in

[use-query/types.ts:83](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L83)

***

### debounceLeading?

> `optional` **debounceLeading**: `boolean`

#### Defined in

[use-query/types.ts:72](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L72)

***

### debounceMaxWait?

> `optional` **debounceMaxWait**: `number`

#### Defined in

[use-query/types.ts:74](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L74)

***

### debounceTrailing?

> `optional` **debounceTrailing**: `boolean`

#### Defined in

[use-query/types.ts:73](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L73)

***

### debounceWait?

> `optional` **debounceWait**: `number`

#### Defined in

[use-query/types.ts:71](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L71)

***

### defaultParams?

> `optional` **defaultParams**: `TParams`

#### Defined in

[use-query/types.ts:52](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L52)

***

### focusTimespan?

> `optional` **focusTimespan**: `number`

#### Defined in

[use-query/types.ts:68](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L68)

***

### getCache()?

> `optional` **getCache**: (`params`) => `undefined` \| `CachedData`\<`TData`, `TParams`\>

#### Parameters

• **params**: `TParams`

#### Returns

`undefined` \| `CachedData`\<`TData`, `TParams`\>

#### Defined in

[use-query/types.ts:86](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L86)

***

### loadingDelay?

> `optional` **loadingDelay**: `number`

#### Defined in

[use-query/types.ts:59](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L59)

***

### manual?

> `optional` **manual**: `boolean`

#### Defined in

[use-query/types.ts:44](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L44)

***

### onBefore()?

> `optional` **onBefore**: (`params`) => `void`

#### Parameters

• **params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:46](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L46)

***

### onError()?

> `optional` **onError**: (`e`, `params`) => `void`

#### Parameters

• **e**: `Error`

• **params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:48](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L48)

***

### onFinally()?

> `optional` **onFinally**: (`params`, `data`?, `e`?) => `void`

#### Parameters

• **params**: `TParams`

• **data?**: `TData`

• **e?**: `Error`

#### Returns

`void`

#### Defined in

[use-query/types.ts:50](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L50)

***

### onSuccess()?

> `optional` **onSuccess**: (`data`, `params`) => `void`

#### Parameters

• **data**: `TData`

• **params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:47](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L47)

***

### pollingErrorRetryCount?

> `optional` **pollingErrorRetryCount**: `number`

#### Defined in

[use-query/types.ts:64](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L64)

***

### pollingInterval?

> `optional` **pollingInterval**: `number`

#### Defined in

[use-query/types.ts:62](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L62)

***

### pollingWhenHidden?

> `optional` **pollingWhenHidden**: `boolean`

#### Defined in

[use-query/types.ts:63](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L63)

***

### ready?

> `optional` **ready**: `boolean`

#### Defined in

[use-query/types.ts:93](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L93)

***

### refreshDeps?

> `optional` **refreshDeps**: `DependencyList`

#### Defined in

[use-query/types.ts:55](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L55)

***

### refreshDepsAction()?

> `optional` **refreshDepsAction**: () => `void`

#### Returns

`void`

#### Defined in

[use-query/types.ts:56](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L56)

***

### refreshOnWindowFocus?

> `optional` **refreshOnWindowFocus**: `boolean`

#### Defined in

[use-query/types.ts:67](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L67)

***

### retryCount?

> `optional` **retryCount**: `number`

#### Defined in

[use-query/types.ts:89](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L89)

***

### retryInterval?

> `optional` **retryInterval**: `number`

#### Defined in

[use-query/types.ts:90](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L90)

***

### setCache()?

> `optional` **setCache**: (`data`) => `void`

#### Parameters

• **data**: `CachedData`\<`TData`, `TParams`\>

#### Returns

`void`

#### Defined in

[use-query/types.ts:85](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L85)

***

### staleTime?

> `optional` **staleTime**: `number`

#### Defined in

[use-query/types.ts:84](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L84)

***

### throttleLeading?

> `optional` **throttleLeading**: `boolean`

#### Defined in

[use-query/types.ts:78](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L78)

***

### throttleTrailing?

> `optional` **throttleTrailing**: `boolean`

#### Defined in

[use-query/types.ts:79](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L79)

***

### throttleWait?

> `optional` **throttleWait**: `number`

#### Defined in

[use-query/types.ts:77](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/hooks/src/use-query/types.ts#L77)
