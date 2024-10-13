[**@hikestack/drizzle**](/official/reference/drizzle/index.md) • **Docs**

***

[@hikestack/drizzle](/official/reference/drizzle/globals.md) / DrizzleModule

# Class: DrizzleModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new DrizzleModule()

> **new DrizzleModule**(): [`DrizzleModule`](/official/reference/drizzle/classes/DrizzleModule.md)

#### Returns

[`DrizzleModule`](/official/reference/drizzle/classes/DrizzleModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`DrizzleModuleOptions`](/official/reference/drizzle/interfaces/DrizzleModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/drizzle/src/drizzle.module.ts:14](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/drizzle/src/drizzle.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`DrizzleModuleOptions`](/official/reference/drizzle/interfaces/DrizzleModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/drizzle/src/drizzle.module.ts:20](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/drizzle/src/drizzle.module.ts#L20)
