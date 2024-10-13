[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Plugin

# Type Alias: Plugin()\<TData, TParams\>

> **Plugin**\<`TData`, `TParams`\>: (`fetchInstance`, `options`) => [`PluginReturn`](/official/reference/hooks/interfaces/PluginReturn.md)\<`TData`, `TParams`\>

## Type Parameters

• **TData**

• **TParams** *extends* `any`[]

## Parameters

• **fetchInstance**: `Fetch`\<`TData`, `TParams`\>

• **options**: [`Options`](/official/reference/hooks/interfaces/Options.md)\<`TData`, `TParams`\>

## Returns

[`PluginReturn`](/official/reference/hooks/interfaces/PluginReturn.md)\<`TData`, `TParams`\>

## Type declaration

### onInit()?

> `optional` **onInit**: (`options`) => `Partial`\<[`FetchState`](/official/reference/hooks/interfaces/FetchState.md)\<`TData`, `TParams`\>\>

#### Parameters

• **options**: [`Options`](/official/reference/hooks/interfaces/Options.md)\<`TData`, `TParams`\>

#### Returns

`Partial`\<[`FetchState`](/official/reference/hooks/interfaces/FetchState.md)\<`TData`, `TParams`\>\>

## Defined in

[use-query/types.ts:98](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/hooks/src/use-query/types.ts#L98)
