[**@hikestack/jvm**](/official/reference/jvm/index.md) • **Docs**

***

[@hikestack/jvm](/official/reference/jvm/globals.md) / JvmModule

# Class: JvmModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new JvmModule()

> **new JvmModule**(): [`JvmModule`](/official/reference/jvm/classes/JvmModule.md)

#### Returns

[`JvmModule`](/official/reference/jvm/classes/JvmModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.4\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`JvmModuleOptions`](/official/reference/jvm/interfaces/JvmModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

packages/jvm/src/jvm.module.ts:14

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`JvmModuleOptions`](/official/reference/jvm/interfaces/JvmModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

packages/jvm/src/jvm.module.ts:20
