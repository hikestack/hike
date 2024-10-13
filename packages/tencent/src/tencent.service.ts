import { Inject, Injectable } from "@nestjs/common";
import { TencentModuleOptions } from "./tencent-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./tencent.module-definition";
import {
	CommonClient,
	RequestOptions,
	ResponseCallback,
} from "tencentcloud-sdk-nodejs-common";

@Injectable()
export class TencentService {
	private readonly secretId: string;
	private readonly secretKey: string;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		public readonly options: TencentModuleOptions,
	) {
		this.secretId = this.options.secretId;
		this.secretKey = this.options.secretKey;
	}

	async describeCaptchaResult(
		req: any,
		options?: ResponseCallback | RequestOptions,
		cb?: ResponseCallback,
	) {
		const clientConfig = {
			credential: {
				secretId: this.secretId,
				secretKey: this.secretKey,
			},
			region: "",
			profile: {
				httpProfile: {
					endpoint: "captcha.tencentcloudapi.com",
				},
			},
		};
		const client = new CommonClient(
			"captcha.tencentcloudapi.com",
			"2019-07-22",
			clientConfig,
		);
		return await client.request(
			"DescribeCaptchaResult",
			{
				CaptchaType: 9,
				...req,
			},
			options,
			cb,
		);
	}
}
