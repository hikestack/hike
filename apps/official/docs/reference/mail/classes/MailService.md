[**@hikestack/mail**](/official/reference/mail/index.md) • **Docs**

***

[@hikestack/mail](/official/reference/mail/globals.md) / MailService

# Class: MailService

## Implements

- [`IMail`](/official/reference/mail/interfaces/IMail.md)

## Constructors

### new MailService()

> **new MailService**(`options`): [`MailService`](/official/reference/mail/classes/MailService.md)

#### Parameters

• **options**: [`MailModuleOptions`](/official/reference/mail/interfaces/MailModuleOptions.md)

#### Returns

[`MailService`](/official/reference/mail/classes/MailService.md)

#### Defined in

[packages/mail/src/mail.service.ts:8](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/mail/src/mail.service.ts#L8)

## Methods

### send()

> **send**(`mailOptions`): `Promise`\<`boolean`\>

#### Parameters

• **mailOptions**: [`MailOptions`](/official/reference/mail/interfaces/MailOptions.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMail`](/official/reference/mail/interfaces/IMail.md).[`send`](/official/reference/mail/interfaces/IMail.md#send)

#### Defined in

[packages/mail/src/mail.service.ts:18](https://github.com/hikestack/hike/blob/657d8d3e2636be06e0c191f0569152086c43ed40/packages/mail/src/mail.service.ts#L18)
