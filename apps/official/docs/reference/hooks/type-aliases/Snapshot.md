[**@hikestack/hooks**](/official/reference/hooks/index.md) • **Docs**

***

[@hikestack/hooks](/official/reference/hooks/globals.md) / Snapshot

# Type Alias: Snapshot\<T\>

> **Snapshot**\<`T`\>: `T` *extends* `object` ? `S` : `T` *extends* `SnapshotIgnore` ? `T` : `T` *extends* `object` ? `{ readonly [K in keyof T]: Snapshot<T[K]> }` : `T`

## Type Parameters

• **T**

## Defined in

use-model/vanilla.ts:30
