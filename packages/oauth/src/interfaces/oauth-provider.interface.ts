export type IAuthorizationOptions = {};
export type IAccessTokenOptions = {};
export type IUserInfoOptions = {};

export interface OAuthProvider<
	IAuthorizationOptions,
	IAccessTokenOptions,
	IUserInfoOptions,
> {
	getAuthorizationUrl(options?: IAuthorizationOptions): Promise<string>;

	getAccessToken(options: IAccessTokenOptions): Promise<string>;

	getUserInfo<TUserInfo = any>(options: IUserInfoOptions): Promise<TUserInfo>;
}
