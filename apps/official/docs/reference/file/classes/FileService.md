[**@hikestack/file**](/official/reference/file/index.md) • **Docs**

***

[@hikestack/file](/official/reference/file/globals.md) / FileService

# Class: FileService

## Constructors

### new FileService()

> **new FileService**(`options`): [`FileService`](/official/reference/file/classes/FileService.md)

#### Parameters

• **options**: [`FileModuleOptions`](/official/reference/file/interfaces/FileModuleOptions.md)

#### Returns

[`FileService`](/official/reference/file/classes/FileService.md)

#### Defined in

[packages/file/src/file.service.ts:7](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/file.service.ts#L7)

## Methods

### delete()

> **delete**(`provider`, `path`): `Promise`\<`boolean`\>

#### Parameters

• **provider**: `string`

• **path**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/file/src/file.service.ts:33](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/file.service.ts#L33)

***

### get()

> **get**(`provider`, `path`): `Promise`\<`string`\>

#### Parameters

• **provider**: `string`

• **path**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/file.service.ts:12](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/file.service.ts#L12)

***

### put()

> **put**(`provider`, `name`, `content`): `Promise`\<`string`\>

#### Parameters

• **provider**: `string`

• **name**: `string`

• **content**: `string` \| `Buffer`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/file.service.ts:22](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/file/src/file.service.ts#L22)