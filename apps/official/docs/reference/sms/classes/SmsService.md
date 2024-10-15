[**@hikestack/sms**](/official/reference/sms/index.md) • **Docs**

***

[@hikestack/sms](/official/reference/sms/globals.md) / SmsService

# Class: SmsService

## Constructors

### new SmsService()

> **new SmsService**(`options`): [`SmsService`](/official/reference/sms/classes/SmsService.md)

#### Parameters

• **options**: [`SmsModuleOptions`](/official/reference/sms/interfaces/SmsModuleOptions.md)

#### Returns

[`SmsService`](/official/reference/sms/classes/SmsService.md)

#### Defined in

[packages/sms/src/sms.service.ts:14](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/sms/src/sms.service.ts#L14)

## Methods

### getBalance()

> **getBalance**\<`T`\>(`provider`, `options`?): `Promise`\<[`IBalanceResult`](/official/reference/sms/type-aliases/IBalanceResult.md)\>

#### Type Parameters

• **T** *extends* [`SmsProvider`](/official/reference/sms/interfaces/SmsProvider.md)\<[`ISendMessageOptions`](/official/reference/sms/type-aliases/ISendMessageOptions.md), [`IGetBalanceOptions`](/official/reference/sms/type-aliases/IGetBalanceOptions.md)\>

#### Parameters

• **provider**: `string`

• **options?**: `T`\[`"getBalance"`\] *extends* (`arg`) => `any` ? `P` : `never`

#### Returns

`Promise`\<[`IBalanceResult`](/official/reference/sms/type-aliases/IBalanceResult.md)\>

#### Defined in

[packages/sms/src/sms.service.ts:31](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/sms/src/sms.service.ts#L31)

***

### sendMessage()

> **sendMessage**\<`T`\>(`provider`, `options`): `Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Type Parameters

• **T** *extends* [`SmsProvider`](/official/reference/sms/interfaces/SmsProvider.md)\<[`ISendMessageOptions`](/official/reference/sms/type-aliases/ISendMessageOptions.md), [`IGetBalanceOptions`](/official/reference/sms/type-aliases/IGetBalanceOptions.md)\>

#### Parameters

• **provider**: `string`

• **options**: `T`\[`"sendMessage"`\] *extends* (`arg`) => `any` ? `P` : `never`

#### Returns

`Promise`\<[`ISendResult`](/official/reference/sms/type-aliases/ISendResult.md)\>

#### Defined in

[packages/sms/src/sms.service.ts:19](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/sms/src/sms.service.ts#L19)
