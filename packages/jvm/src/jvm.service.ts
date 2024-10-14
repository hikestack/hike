import * as path from "path";
import { promisify } from "util";
import { Inject, Injectable } from "@nestjs/common";
import * as java from "java";
import * as mvn from "node-java-maven";
import { JvmModuleOptions } from "./jvm-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./jvm.module-definition";

@Injectable()
export class JvmService {
	private readonly jvm;

	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		public readonly options: JvmModuleOptions,
	) {
		// @ts-ignore
		java.asyncOptions = {
			asyncSuffix: undefined,
			syncSuffix: "",
			promiseSuffix: "Async",
			promisify,
		};
		this.jvm = java;
	}

	public get JVM() {
		return this.jvm;
	}

	async init() {
		if (this.options.dependencies) {
			this.options.dependencies.forEach((d) => {
				this.jvm.classpath.push(path.join(this.options.baseDir, d));
			});
		}
		return new Promise((resolve, reject) => {
			mvn((err, res) => {
				if (err) {
					reject(err);
				}
				res.classpath.forEach((c) => {
					this.jvm.classpath.push(c);
				});
				resolve(true);
			});
		});
	}
}
