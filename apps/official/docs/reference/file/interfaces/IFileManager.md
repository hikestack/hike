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

[packages/file/src/interfaces/file-manager.interface.ts:4](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/file/src/interfaces/file-manager.interface.ts#L4)

***

### get()

> **get**(`path`): `Promise`\<`string`\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/interfaces/file-manager.interface.ts:3](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/file/src/interfaces/file-manager.interface.ts#L3)

***

### put()

> **put**(`name`, `content`): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **content**: `string` \| `Buffer`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/file/src/interfaces/file-manager.interface.ts:2](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/file/src/interfaces/file-manager.interface.ts#L2)
