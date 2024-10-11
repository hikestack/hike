[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / useQuery

# Function: useQuery()

> **useQuery**\<`TData`, `TParams`\>(`service`, `options`?, `plugins`?): [`Result`](/official/reference/hooks/interfaces/Result.md)\<`TData`, `TParams`\>

## Type Parameters

• **TData**

• **TParams** *extends* `any`[]

## Parameters

• **service**: [`Service`](/official/reference/hooks/type-aliases/Service.md)\<`TData`, `TParams`\>

• **options?**: [`Options`](/official/reference/hooks/interfaces/Options.md)\<`TData`, `TParams`\>

• **plugins?**: [`Plugin`](/official/reference/hooks/type-aliases/Plugin.md)\<`TData`, `TParams`\>[]

## Returns

[`Result`](/official/reference/hooks/interfaces/Result.md)\<`TData`, `TParams`\>

## Defined in

[use-query/use-query.ts:12](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/hooks/src/use-query/use-query.ts#L12)
