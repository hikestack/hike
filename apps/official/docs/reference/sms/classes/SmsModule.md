[**@hikestack/sms**](/official/reference/sms/index.md) • **Docs**

***

[@hikestack/sms](/official/reference/sms/globals.md) / SmsModule

# Class: SmsModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new SmsModule()

> **new SmsModule**(): [`SmsModule`](/official/reference/sms/classes/SmsModule.md)

#### Returns

[`SmsModule`](/official/reference/sms/classes/SmsModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`SmsModuleOptions`](/official/reference/sms/interfaces/SmsModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/sms/src/sms.module.ts:14](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/sms/src/sms.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`SmsModuleOptions`](/official/reference/sms/interfaces/SmsModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/sms/src/sms.module.ts:20](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/sms/src/sms.module.ts#L20)
