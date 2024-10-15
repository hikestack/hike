[**@hikestack/kysely**](/official/reference/kysely/index.md) • **Docs**

***

[@hikestack/kysely](/official/reference/kysely/globals.md) / KyselyModule

# Class: KyselyModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new KyselyModule()

> **new KyselyModule**(): [`KyselyModule`](/official/reference/kysely/classes/KyselyModule.md)

#### Returns

[`KyselyModule`](/official/reference/kysely/classes/KyselyModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`KyselyModuleOptions`](/official/reference/kysely/interfaces/KyselyModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/kysely/src/kysely.module.ts:14](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/kysely/src/kysely.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`KyselyModuleOptions`](/official/reference/kysely/interfaces/KyselyModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/kysely/src/kysely.module.ts:20](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/kysely/src/kysely.module.ts#L20)
