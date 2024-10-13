[**@hikestack/file**](/official/reference/file/index.md) • **Docs**

***

[@hikestack/file](/official/reference/file/globals.md) / LocalFileSystemProvider

# Class: LocalFileSystemProvider

## Implements

- [`IFileManager`](/official/reference/file/interfaces/IFileManager.md)

## Constructors

### new LocalFileSystemProvider()

> **new LocalFileSystemProvider**(`options`): [`LocalFileSystemProvider`](/official/reference/file/classes/LocalFileSystemProvider.md)

#### Parameters

• **options**: [`LocalFileSystemProviderOptions`](/official/reference/file/interfaces/LocalFileSystemProviderOptions.md)

#### Returns

[`LocalFileSystemProvider`](/official/reference/file/classes/LocalFileSystemProvider.md)

#### Defined in

[packages/file/src/providers/local/local-file-system.provider.ts:9](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/providers/local/local-file-system.provider.ts#L9)

## Methods

### delete()

> **delete**(`path`): `Promise`\<`boolean`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFileManager`](/official/reference/file/interfaces/IFileManager.md).[`delete`](/official/reference/file/interfaces/IFileManager.md#delete)

#### Defined in

[packages/file/src/providers/local/local-file-system.provider.ts:31](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/providers/local/local-file-system.provider.ts#L31)

***

### get()

> **get**(`path`): `Promise`\<`string`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IFileManager`](/official/reference/file/interfaces/IFileManager.md).[`get`](/official/reference/file/interfaces/IFileManager.md#get)

#### Defined in

[packages/file/src/providers/local/local-file-system.provider.ts:27](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/providers/local/local-file-system.provider.ts#L27)

***

### put()

> **put**(`name`, `content`): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **content**: `string` \| `Buffer`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IFileManager`](/official/reference/file/interfaces/IFileManager.md).[`put`](/official/reference/file/interfaces/IFileManager.md#put)

#### Defined in

[packages/file/src/providers/local/local-file-system.provider.ts:11](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/providers/local/local-file-system.provider.ts#L11)