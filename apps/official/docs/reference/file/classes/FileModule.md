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

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/file/src/file.module.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/file/src/file.module.ts#L14)

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

[packages/file/src/file.module.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/file/src/file.module.ts#L20)
