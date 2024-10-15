[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Snapshot

# Type Alias: Snapshot\<T\>

> **Snapshot**\<`T`\>: `T` *extends* `object` ? `S` : `T` *extends* `SnapshotIgnore` ? `T` : `T` *extends* `object` ? `{ readonly [K in keyof T]: Snapshot<T[K]> }` : `T`

## Type Parameters

• **T**

## Defined in

[use-model/vanilla.ts:30](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hooks/src/use-model/vanilla.ts#L30)
