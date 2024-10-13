import { AliyunSteVerifyOptions } from "@/interfaces";
import { Inject, Injectable } from "@nestjs/common";
import { MODULE_OPTIONS_TOKEN } from "../aliyun.module-definition";
import { AliyunModuleOptions } from "../interfaces/aliyun-module-options.interface";
import { AliyunOssService } from "./aliyun-oss.service";

@Injectable()
export class AliyunService {
	private readonly ossService: AliyunOssService;

	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		public readonly options: AliyunModuleOptions,
	) {
		if (this.options.oss) {
			this.ossService = new AliyunOssService(this.options.oss);
		}
	}

	public get OSS() {
		return this.ossService;
	}

	public async steVerify({ appCode, ...params }: AliyunSteVerifyOptions) {
		return await fetch("https://zidv2.market.alicloudapi.com/idcheck/Post", {
			method: "POST",
			body: JSON.stringify(params),
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
				Authorization: `APPCODE ${appCode}`,
			},
		}).then((res) => res.json());
	}
}
