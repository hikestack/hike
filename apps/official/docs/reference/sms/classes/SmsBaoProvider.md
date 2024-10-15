[**@hikestack/sms**](/official/reference/sms/index.md) • **Docs**

***

[@hikestack/sms](/official/reference/sms/globals.md) / SmsBaoProvider

# Class: SmsBaoProvider

## Implements

- [`SmsProvider`](/official/reference/sms/interfaces/SmsProvider.md)\<`SmsBaoSendMessageOptions`, `SmsBaoGetBalanceOptions`\>

## Constructors

### new SmsBaoProvider()

> **new SmsBaoProvider**(`clientId`, `clientSecret`): [`SmsBaoProvider`](/official/reference/sms/classes/SmsBaoProvider.md)

#### Parameters

• **clientId**: `string`

• **clientSecret**: `string`

#### Returns

[`SmsBaoProvider`](/official/reference/sms/classes/SmsBaoProvider.md)

#### Defined in

[packages/sms/src/providers/smsbao/smsbao.provider.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/sms/src/providers/smsbao/smsbao.provider.ts#L20)

## Methods

### getBalance()

> **getBalance**(`__namedParameters`): `Promise`\<`any`\>

#### Parameters

• **\_\_namedParameters**: `SmsBaoGetBalanceOptions` = `{}`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`SmsProvider`](/official/reference/sms/interfaces/SmsProvider.md).[`getBalance`](/official/reference/sms/interfaces/SmsProvider.md#getbalance)

#### Defined in

[packages/sms/src/providers/smsbao/smsbao.provider.ts:44](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/sms/src/providers/smsbao/smsbao.provider.ts#L44)

***

### sendMessage()

> **sendMessage**(`__namedParameters`): `Promise`\<`any`\>

#### Parameters

• **\_\_namedParameters**: `SmsBaoSendMessageOptions`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`SmsProvider`](/official/reference/sms/interfaces/SmsProvider.md).[`sendMessage`](/official/reference/sms/interfaces/SmsProvider.md#sendmessage)

#### Defined in

[packages/sms/src/providers/smsbao/smsbao.provider.ts:25](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/sms/src/providers/smsbao/smsbao.provider.ts#L25)
