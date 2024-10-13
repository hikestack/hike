[**@hikestack/oauth**](/official/reference/oauth/index.md) • **Docs**

***

[@hikestack/oauth](/official/reference/oauth/globals.md) / OAuthModule

# Class: OAuthModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new OAuthModule()

> **new OAuthModule**(): [`OAuthModule`](/official/reference/oauth/classes/OAuthModule.md)

#### Returns

[`OAuthModule`](/official/reference/oauth/classes/OAuthModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`OAuthModuleOptions`](/official/reference/oauth/interfaces/OAuthModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/oauth/src/oauth.module.ts:14](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`OAuthModuleOptions`](/official/reference/oauth/interfaces/OAuthModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/oauth/src/oauth.module.ts:20](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.module.ts#L20)
