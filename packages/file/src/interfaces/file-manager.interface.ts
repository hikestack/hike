export interface IFileManager {
	put(name: string, content: string | Buffer): Promise<string>;
	get(path: string): Promise<string>;
	delete(path: string): Promise<boolean>;
}
