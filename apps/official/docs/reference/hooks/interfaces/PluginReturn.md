[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / PluginReturn

# Interface: PluginReturn\<TData, TParams\>

## Type Parameters

• **TData**

• **TParams** *extends* `any`[]

## Properties

### onBefore()?

> `optional` **onBefore**: (`params`) => `undefined` \| `object` & `Partial`\<[`FetchState`](/official/reference/hooks/interfaces/FetchState.md)\<`TData`, `TParams`\>\>

#### Parameters

• **params**: `TParams`

#### Returns

`undefined` \| `object` & `Partial`\<[`FetchState`](/official/reference/hooks/interfaces/FetchState.md)\<`TData`, `TParams`\>\>

#### Defined in

[use-query/types.ts:20](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L20)

***

### onCancel()?

> `optional` **onCancel**: () => `void`

#### Returns

`void`

#### Defined in

[use-query/types.ts:37](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L37)

***

### onError()?

> `optional` **onError**: (`e`, `params`) => `void`

#### Parameters

• **e**: `Error`

• **params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:35](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L35)

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

[use-query/types.ts:36](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L36)

***

### onMutate()?

> `optional` **onMutate**: (`data`) => `void`

#### Parameters

• **data**: `TData`

#### Returns

`void`

#### Defined in

[use-query/types.ts:38](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L38)

***

### onRequest()?

> `optional` **onRequest**: (`service`, `params`) => `object`

#### Parameters

• **service**: [`Service`](/official/reference/hooks/type-aliases/Service.md)\<`TData`, `TParams`\>

• **params**: `TParams`

#### Returns

`object`

##### servicePromise?

> `optional` **servicePromise**: `Promise`\<`TData`\>

#### Defined in

[use-query/types.ts:27](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L27)

***

### onSuccess()?

> `optional` **onSuccess**: (`data`, `params`) => `void`

#### Parameters

• **data**: `TData`

• **params**: `TParams`

#### Returns

`void`

#### Defined in

[use-query/types.ts:34](https://github.com/hikestack/hike/blob/be0a5d8b5244742be2e4135d1259238afe0eda85/packages/hooks/src/use-query/types.ts#L34)
