import { Inject, Injectable } from "@nestjs/common";
import {
	IAccessTokenOptions,
	IAuthorizationOptions,
	IUserInfoOptions,
	OAuthModuleOptions,
	OAuthProvider,
} from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./oauth.module-definition";

@Injectable()
export class OAuthService {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: OAuthModuleOptions,
	) {}

	async getAuthorizationUrl<
		T extends OAuthProvider<
			IAuthorizationOptions,
			IAccessTokenOptions,
			IUserInfoOptions
		>,
	>(
		provider: keyof OAuthModuleOptions["providers"],
		options?: T["getAuthorizationUrl"] extends (arg: infer P) => any
			? P
			: never,
	): Promise<string> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return (this.options.providers[provider] as T).getAuthorizationUrl(options);
	}

	async getAccessToken<
		T extends OAuthProvider<
			IAuthorizationOptions,
			IAccessTokenOptions,
			IUserInfoOptions
		>,
	>(
		provider: keyof OAuthModuleOptions["providers"],
		options: T["getAccessToken"] extends (arg: infer P) => any ? P : never,
	): Promise<string> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return (this.options.providers[provider] as T).getAccessToken(options);
	}

	async getUserInfo<
		T extends OAuthProvider<
			IAuthorizationOptions,
			IAccessTokenOptions,
			IUserInfoOptions
		>,
		IUserInfo = any,
	>(
		provider: keyof OAuthModuleOptions["providers"],
		options: T["getUserInfo"] extends (arg: infer P) => any ? P : never,
	): Promise<IUserInfo> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return (this.options.providers[provider] as T).getUserInfo(options);
	}
}
