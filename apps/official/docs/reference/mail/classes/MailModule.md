[**@hikestack/mail**](/official/reference/mail/index.md) • **Docs**

***

[@hikestack/mail](/official/reference/mail/globals.md) / MailModule

# Class: MailModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new MailModule()

> **new MailModule**(): [`MailModule`](/official/reference/mail/classes/MailModule.md)

#### Returns

[`MailModule`](/official/reference/mail/classes/MailModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`MailModuleOptions`](/official/reference/mail/interfaces/MailModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/mail/src/mail.module.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/mail/src/mail.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`MailModuleOptions`](/official/reference/mail/interfaces/MailModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/mail/src/mail.module.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/mail/src/mail.module.ts#L20)
