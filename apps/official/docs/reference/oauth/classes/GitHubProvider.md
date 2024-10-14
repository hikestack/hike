[**@hikestack/oauth**](/official/reference/oauth/index.md) • **Docs**

***

[@hikestack/oauth](/official/reference/oauth/globals.md) / GitHubProvider

# Class: GitHubProvider

## Implements

- [`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md)\<`GitHubAuthorizationOptions`, `GitHubAccessTokenOptions`, `GitHubUserOptions`\>

## Constructors

### new GitHubProvider()

> **new GitHubProvider**(`clientId`, `clientSecret`, `redirectUri`?): [`GitHubProvider`](/official/reference/oauth/classes/GitHubProvider.md)

#### Parameters

• **clientId**: `string`

• **clientSecret**: `string`

• **redirectUri?**: `string`

#### Returns

[`GitHubProvider`](/official/reference/oauth/classes/GitHubProvider.md)

#### Defined in

[packages/oauth/src/providers/github/github.provider.ts:30](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/oauth/src/providers/github/github.provider.ts#L30)

## Methods

### getAccessToken()

> **getAccessToken**(`__namedParameters`): `Promise`\<`string`\>

#### Parameters

• **\_\_namedParameters**: `GitHubAccessTokenOptions`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md).[`getAccessToken`](/official/reference/oauth/interfaces/OAuthProvider.md#getaccesstoken)

#### Defined in

[packages/oauth/src/providers/github/github.provider.ts:52](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/oauth/src/providers/github/github.provider.ts#L52)

***

### getAuthorizationUrl()

> **getAuthorizationUrl**(`__namedParameters`): `Promise`\<`string`\>

#### Parameters

• **\_\_namedParameters**: `GitHubAuthorizationOptions` = `...`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md).[`getAuthorizationUrl`](/official/reference/oauth/interfaces/OAuthProvider.md#getauthorizationurl)

#### Defined in

[packages/oauth/src/providers/github/github.provider.ts:36](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/oauth/src/providers/github/github.provider.ts#L36)

***

### getUserInfo()

> **getUserInfo**(`__namedParameters`): `Promise`\<`any`\>

#### Parameters

• **\_\_namedParameters**: `GitHubUserOptions`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`OAuthProvider`](/official/reference/oauth/interfaces/OAuthProvider.md).[`getUserInfo`](/official/reference/oauth/interfaces/OAuthProvider.md#getuserinfo)

#### Defined in

[packages/oauth/src/providers/github/github.provider.ts:78](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/oauth/src/providers/github/github.provider.ts#L78)
