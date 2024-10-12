import { promises as fs } from "fs";
import { IFileManager } from "../../interfaces";

export interface LocalFileSystemProviderOptions {
	root: string;
}

export class LocalFileSystemProvider implements IFileManager {
	constructor(private readonly options: LocalFileSystemProviderOptions) {}

	async put(name: string, content: string | Buffer): Promise<string> {
		const filePath = `${this.options.root}/${name}`;

		await fs.mkdir(this.options.root, { recursive: true });

		if (typeof content === "string") {
			await fs.writeFile(filePath, content);
		} else if (Buffer.isBuffer(content)) {
			await fs.writeFile(filePath, content);
		} else {
			throw new Error("Unsupported content type");
		}

		return filePath;
	}

	async get(path: string): Promise<string> {
		return await fs.readFile(path, "utf8");
	}

	async delete(path: string): Promise<boolean> {
		await fs.unlink(path);
		return true;
	}
}
