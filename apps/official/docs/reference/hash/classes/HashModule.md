[**@hikestack/hash**](/official/reference/hash/index.md) • **Docs**

***

[@hikestack/hash](/official/reference/hash/globals.md) / HashModule

# Class: HashModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new HashModule()

> **new HashModule**(): [`HashModule`](/official/reference/hash/classes/HashModule.md)

#### Returns

[`HashModule`](/official/reference/hash/classes/HashModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`HashModuleOptions`](/official/reference/hash/interfaces/HashModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/hash/src/hash.module.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/hash.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`HashModuleOptions`](/official/reference/hash/interfaces/HashModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/hash/src/hash.module.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/hash/src/hash.module.ts#L20)
