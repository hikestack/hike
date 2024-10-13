[**@hikestack/sms**](/official/reference/sms/index.md) • **Docs**

***

[@hikestack/sms](/official/reference/sms/globals.md) / SmsProvider

# Interface: SmsProvider\<ISendMessageOptions, IGetBalanceOptions\>

## Type Parameters

• **ISendMessageOptions**

• **IGetBalanceOptions**

## Methods

### getBalance()

> **getBalance**(`options`?): `Promise`\<[`IBalanceResult`](/official/reference/sms/type-aliases/IBalanceResult.md)\>

#### Parameters

• **options?**: `IGetBalanceOptions`

#### Returns

`Promise`\<[`IBalanceResult`](/official/reference/sms/type-aliases/IBalanceResult.md)\>

#### Defined in

[packages/sms/src/interfaces/sms-provider.interface.ts:8](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/sms/src/interfaces/sms-provider.interface.ts#L8)

***

### sendMessage()

> **sendMessage**(`options`?): `Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Parameters

• **options?**: `ISendMessageOptions`

#### Returns

`Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Defined in

[packages/sms/src/interfaces/sms-provider.interface.ts:7](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/sms/src/interfaces/sms-provider.interface.ts#L7)
