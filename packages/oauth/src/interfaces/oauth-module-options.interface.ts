import {
	IAccessTokenOptions,
	IAuthorizationOptions,
	IUserInfoOptions,
	OAuthProvider,
} from "./oauth-provider.interface";

export interface OAuthModuleOptions {
	providers: Record<
		string,
		OAuthProvider<IAuthorizationOptions, IAccessTokenOptions, IUserInfoOptions>
	>;
}
