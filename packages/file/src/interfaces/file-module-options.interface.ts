import { IFileManager } from "./file-manager.interface";

export interface FileModuleOptions {
	providers: Record<string, IFileManager>;
}
