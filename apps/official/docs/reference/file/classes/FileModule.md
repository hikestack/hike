[**@hikestack/file**](/official/reference/file/index.md) • **Docs**

***

[@hikestack/file](/official/reference/file/globals.md) / FileModule

# Class: FileModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new FileModule()

> **new FileModule**(): [`FileModule`](/official/reference/file/classes/FileModule.md)

#### Returns

[`FileModule`](/official/reference/file/classes/FileModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`FileModuleOptions`](/official/reference/file/interfaces/FileModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/file/src/file.module.ts:14](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/file/src/file.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`FileModuleOptions`](/official/reference/file/interfaces/FileModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/file/src/file.module.ts:20](https://github.com/hikestack/hike/blob/52383186e258bf337fb21483cef3f6798e622fe1/packages/file/src/file.module.ts#L20)
