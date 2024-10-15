export interface IHash {
	hash(data: string, salt?: string): Promise<string>;
	compare(data: string, hash: string): Promise<boolean>;
	genSalt(rounds?: number): Promise<string>;
}
