export interface IHash {
	hash(data: string, salt?: string): Promise<string>;
	compare(data: string, hash: string): Promise<boolean>;
}
