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

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/mail/src/mail.module.ts:14](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/mail/src/mail.module.ts#L14)

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

[packages/mail/src/mail.module.ts:20](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/mail/src/mail.module.ts#L20)
