import dotenvx from '@dotenvx/dotenvx';
import { defineConfig } from 'drizzle-kit';

dotenvx.config({
    path: [`./env/${process.env.NODE_ENV}.env`],
});

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
        database: process.env.DB_NAME!,
        host: process.env.DB_HOST!,
        port: Number.parseInt(process.env.DB_PORT!, 10),
        user: process.env.DB_USER!,
        password: process.env.DB_PASS!,
    },
});
