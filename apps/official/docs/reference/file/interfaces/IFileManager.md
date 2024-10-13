[**@hikestack/file**](/official/reference/file/index.md) • **Docs**

***

[@hikestack/file](/official/reference/file/globals.md) / IFileManager

# Interface: IFileManager

## Methods

### delete()

> **delete**(`path`): `Promise`\<`boolean`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/file/src/interfaces/file-manager.interface.ts:4](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/file/src/interfaces/file-manager.interface.ts#L4)

***

### get()

> **get**(`path`): `Promise`\<`string`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/interfaces/file-manager.interface.ts:3](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/file/src/interfaces/file-manager.interface.ts#L3)

***

### put()

> **put**(`name`, `content`): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **content**: `string` \| `Buffer`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/interfaces/file-manager.interface.ts:2](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/file/src/interfaces/file-manager.interface.ts#L2)
