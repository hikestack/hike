import { LoggerService } from "@hikestack/logger";
import { Logger } from "drizzle-orm";
import kleur from "kleur";

export class DbLogger implements Logger {

    constructor(private readonly logger: LoggerService) { }

    logQuery(query: string, params: unknown[]): void {
        this.logger.log(`⇙⇙⇙
                    
${kleur.grey('SQL:')} ${kleur.magenta(query)}

${kleur.grey('Params:')} ${kleur.magenta(JSON.stringify(params))}`, DbLogger.name);
    }
}