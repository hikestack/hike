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

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/lock/src/lock.module.ts:14](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/lock/src/lock.module.ts#L14)

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

[packages/lock/src/lock.module.ts:20](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/lock/src/lock.module.ts#L20)
