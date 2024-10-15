[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Snapshot

# Type Alias: Snapshot\<T\>

> **Snapshot**\<`T`\>: `T` *extends* `object` ? `S` : `T` *extends* `SnapshotIgnore` ? `T` : `T` *extends* `object` ? `{ readonly [K in keyof T]: Snapshot<T[K]> }` : `T`

## Type Parameters

• **T**

## Defined in

[use-model/vanilla.ts:30](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/hooks/src/use-model/vanilla.ts#L30)
