[**@hikestack/logger**](/official/reference/logger/index.md) • **Docs**

***

[@hikestack/logger](/official/reference/logger/globals.md) / LoggerModule

# Class: LoggerModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new LoggerModule()

> **new LoggerModule**(): [`LoggerModule`](/official/reference/logger/classes/LoggerModule.md)

#### Returns

[`LoggerModule`](/official/reference/logger/classes/LoggerModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`LoggerModuleOptions`](/official/reference/logger/interfaces/LoggerModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/logger/src/logger.module.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/logger.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`LoggerModuleOptions`](/official/reference/logger/interfaces/LoggerModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/logger/src/logger.module.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/logger.module.ts#L20)
