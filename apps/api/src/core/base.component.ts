import * as schema from '@/db/schema';
import { LoggerService } from "@hikestack/logger";
import { Inject, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import { DbLogger } from './db-logger';

export abstract class BaseComponent implements OnModuleInit {
    @Inject(ConfigService)
    protected readonly config: ConfigService;

    @Inject(LoggerService)
    protected readonly logger: LoggerService;

    protected db: MySql2Database<typeof schema> & {
        $client: any;
    }

    async onModuleInit() {
        this.db = drizzle({
            ...this.config.get('db.drizzle'),
            schema,
            logger: new DbLogger(this.logger)
        });
    }
}