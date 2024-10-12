import { OAuthProvider } from "../../interfaces";

type GitHubAuthorizationOptions = {
	scope: string;
	state: string;
};

type GitHubAccessTokenOptions = {
	code: string;
};

type GitHubUserOptions = {
	accessToken: string;
};

type GitHubUserInfo = any;

export class GitHubProvider
	implements
		OAuthProvider<
			GitHubAuthorizationOptions,
			GitHubAccessTokenOptions,
			GitHubUserOptions
		>
{
	private readonly clientId: string;
	private readonly clientSecret: string;
	private readonly redirectUri?: string;

	constructor(clientId: string, clientSecret: string, redirectUri?: string) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.redirectUri = redirectUri;
	}

	async getAuthorizationUrl(
		{ scope, state }: GitHubAuthorizationOptions = {
			scope: "user",
			state: "",
		},
	): Promise<string> {
		const params = new URLSearchParams();
		params.append("client_id", this.clientId);
		params.append("scope", scope);
		state && params.append("state", state);
		this.redirectUri &&
			params.append("redirect_uri", encodeURIComponent(this.redirectUri));

		return `https://github.com/login/oauth/authorize?${params.toString()}`;
	}

	async getAccessToken({ code }: GitHubAccessTokenOptions): Promise<string> {
		const params = new URLSearchParams();
		params.append("client_id", this.clientId);
		params.append("client_secret", this.clientSecret);
		params.append("code", code);
		this.redirectUri &&
			params.append("redirect_uri", encodeURIComponent(this.redirectUri));

		const response = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: params.toString(),
			},
		);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return response.text();
	}

	async getUserInfo({
		accessToken,
	}: GitHubUserOptions): Promise<GitHubUserInfo> {
		const response = await fetch("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"X-GitHub-Api-Version": "2022-11-28",
			},
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return response.json();
	}
}
