[**@hikestack/mail**](/official/reference/mail/index.md) • **Docs**

***

[@hikestack/mail](/official/reference/mail/globals.md) / NodemailerAdapter

# Class: NodemailerAdapter

## Implements

- [`IMail`](/official/reference/mail/interfaces/IMail.md)

## Constructors

### new NodemailerAdapter()

> **new NodemailerAdapter**(`options`): [`NodemailerAdapter`](/official/reference/mail/classes/NodemailerAdapter.md)

#### Parameters

• **options**: `Transporter`

#### Returns

[`NodemailerAdapter`](/official/reference/mail/classes/NodemailerAdapter.md)

#### Defined in

[packages/mail/src/adapters/nodemailer/nodemailer.adapter.ts:6](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/mail/src/adapters/nodemailer/nodemailer.adapter.ts#L6)

## Methods

### send()

> **send**(`options`): `Promise`\<`boolean`\>

#### Parameters

• **options**: [`MailOptions`](/official/reference/mail/interfaces/MailOptions.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMail`](/official/reference/mail/interfaces/IMail.md).[`send`](/official/reference/mail/interfaces/IMail.md#send)

#### Defined in

[packages/mail/src/adapters/nodemailer/nodemailer.adapter.ts:10](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/mail/src/adapters/nodemailer/nodemailer.adapter.ts#L10)
