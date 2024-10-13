[**@hikestack/lock**](/official/reference/lock/index.md) • **Docs**

***

[@hikestack/lock](/official/reference/lock/globals.md) / LockModule

# Class: LockModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new LockModule()

> **new LockModule**(): [`LockModule`](/official/reference/lock/classes/LockModule.md)

#### Returns

[`LockModule`](/official/reference/lock/classes/LockModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`LockModuleOptions`](/official/reference/lock/interfaces/LockModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/lock/src/lock.module.ts:14](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/lock/src/lock.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`LockModuleOptions`](/official/reference/lock/interfaces/LockModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/lock/src/lock.module.ts:20](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/lock/src/lock.module.ts#L20)
