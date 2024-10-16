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

[packages/sms/src/interfaces/sms-provider.interface.ts:8](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/sms/src/interfaces/sms-provider.interface.ts#L8)

***

### sendMessage()

> **sendMessage**(`options`?): `Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Parameters

• **options?**: `ISendMessageOptions`

#### Returns

`Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Defined in

[packages/sms/src/interfaces/sms-provider.interface.ts:7](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/sms/src/interfaces/sms-provider.interface.ts#L7)
