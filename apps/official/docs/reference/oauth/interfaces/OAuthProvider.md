[**@hikestack/oauth**](/official/reference/oauth/index.md) • **Docs**

***

[@hikestack/oauth](/official/reference/oauth/globals.md) / OAuthProvider

# Interface: OAuthProvider\<IAuthorizationOptions, IAccessTokenOptions, IUserInfoOptions\>

## Type Parameters

• **IAuthorizationOptions**

• **IAccessTokenOptions**

• **IUserInfoOptions**

## Methods

### getAccessToken()

> **getAccessToken**(`options`): `Promise`\<`string`\>

#### Parameters

• **options**: `IAccessTokenOptions`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/oauth/src/interfaces/oauth-provider.interface.ts:12](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/oauth/src/interfaces/oauth-provider.interface.ts#L12)

***

### getAuthorizationUrl()

> **getAuthorizationUrl**(`options`?): `Promise`\<`string`\>

#### Parameters

• **options?**: `IAuthorizationOptions`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/oauth/src/interfaces/oauth-provider.interface.ts:10](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/oauth/src/interfaces/oauth-provider.interface.ts#L10)

***

### getUserInfo()

> **getUserInfo**\<`TUserInfo`\>(`options`): `Promise`\<`TUserInfo`\>

#### Type Parameters

• **TUserInfo** = `any`

#### Parameters

• **options**: `IUserInfoOptions`

#### Returns

`Promise`\<`TUserInfo`\>

#### Defined in

[packages/oauth/src/interfaces/oauth-provider.interface.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/oauth/src/interfaces/oauth-provider.interface.ts#L14)
