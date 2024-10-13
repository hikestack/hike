import { AliyunOssService } from "./aliyun-oss.service";
import { AliyunService } from "./aliyun.service";
export * from "./aliyun-oss.service";
export * from "./aliyun.service";

export const services = [AliyunService, AliyunOssService];
