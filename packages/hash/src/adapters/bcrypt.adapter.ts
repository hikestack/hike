import { IHash } from "../interfaces";
import * as bcrypt from 'bcryptjs';

export class BcryptAdapter implements IHash {

	async hash(data: string, salt?: string): Promise<string> {
		return await bcrypt.hash(data, salt);
	}

	async compare(data: string, hash: string): Promise<boolean> {
		return await bcrypt.compare(data, hash);
	}

}
