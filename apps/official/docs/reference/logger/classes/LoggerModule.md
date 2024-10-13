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

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/logger/src/logger.module.ts:14](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/logger.module.ts#L14)

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

[packages/logger/src/logger.module.ts:20](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/logger.module.ts#L20)