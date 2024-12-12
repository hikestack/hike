import * as bcrypt from "bcryptjs";

export class Bcrypt {
    async hash(data: string, salt?: string): Promise<string> {
        return await bcrypt.hash(data, salt);
    }

    async compare(data: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(data, hash);
    }

    async genSalt(rounds?: number): Promise<string> {
        return await bcrypt.genSalt(rounds);
    }
}