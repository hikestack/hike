[**@hikestack/oauth**](/official/reference/oauth/index.md) • **Docs**

***

[@hikestack/oauth](/official/reference/oauth/globals.md) / OAuthService

# Class: OAuthService

## Constructors

### new OAuthService()

> **new OAuthService**(`options`): [`OAuthService`](/official/reference/oauth/classes/OAuthService.md)

#### Parameters

• **options**: [`OAuthModuleOptions`](/official/reference/oauth/interfaces/OAuthModuleOptions.md)

#### Returns

[`OAuthService`](/official/reference/oauth/classes/OAuthService.md)

#### Defined in

[packages/oauth/src/oauth.service.ts:13](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.service.ts#L13)

## Methods

### getAccessToken()

> **getAccessToken**\<`T`\>(`provider`, `options`): `Promise`\<`string`\>

#### Type Parameters

• **T** *extends* [`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md)\<[`IAuthorizationOptions`](/official/reference/oauth/type-aliases/IAuthorizationOptions.md), [`IAccessTokenOptions`](/official/reference/oauth/type-aliases/IAccessTokenOptions.md), [`IUserInfoOptions`](/official/reference/oauth/type-aliases/IUserInfoOptions.md)\>

#### Parameters

• **provider**: `string`

• **options**: `T`\[`"getAccessToken"`\] *extends* (`arg`) => `any` ? `P` : `never`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/oauth/src/oauth.service.ts:36](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.service.ts#L36)

***

### getAuthorizationUrl()

> **getAuthorizationUrl**\<`T`\>(`provider`, `options`?): `Promise`\<`string`\>

#### Type Parameters

• **T** *extends* [`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md)\<[`IAuthorizationOptions`](/official/reference/oauth/type-aliases/IAuthorizationOptions.md), [`IAccessTokenOptions`](/official/reference/oauth/type-aliases/IAccessTokenOptions.md), [`IUserInfoOptions`](/official/reference/oauth/type-aliases/IUserInfoOptions.md)\>

#### Parameters

• **provider**: `string`

• **options?**: `T`\[`"getAuthorizationUrl"`\] *extends* (`arg`) => `any` ? `P` : `never`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/oauth/src/oauth.service.ts:18](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.service.ts#L18)

***

### getUserInfo()

> **getUserInfo**\<`T`, `IUserInfo`\>(`provider`, `options`): `Promise`\<`IUserInfo`\>

#### Type Parameters

• **T** *extends* [`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md)\<[`IAuthorizationOptions`](/official/reference/oauth/type-aliases/IAuthorizationOptions.md), [`IAccessTokenOptions`](/official/reference/oauth/type-aliases/IAccessTokenOptions.md), [`IUserInfoOptions`](/official/reference/oauth/type-aliases/IUserInfoOptions.md)\>

• **IUserInfo** = `any`

#### Parameters

• **provider**: `string`

• **options**: `T`\[`"getUserInfo"`\] *extends* (`arg`) => `any` ? `P` : `never`

#### Returns

`Promise`\<`IUserInfo`\>

#### Defined in

[packages/oauth/src/oauth.service.ts:52](https://github.com/hikestack/hike/blob/1ebdd11ee7a70660fc764f71da265cc7eb170554/packages/oauth/src/oauth.service.ts#L52)
