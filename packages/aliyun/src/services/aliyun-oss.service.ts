import { AliyunOssOptions } from "@/interfaces";
import OSS from "ali-oss";

export class AliyunOssService {
	private readonly client: OSS;

	constructor(private readonly options: AliyunOssOptions) {
		this.client = new OSS(this.options);
	}

	async put(name: string, file: any, options?: OSS.PutObjectOptions) {
		return await this.client.put(name, file, options);
	}
}
