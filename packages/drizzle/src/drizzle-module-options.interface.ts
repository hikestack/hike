import { drizzle } from "drizzle-orm/connect";

type DirzzleOptions = Parameters<typeof drizzle>;
export type DatabaseClient = DirzzleOptions[0];
export type DatabaseConnectionOptions = DirzzleOptions[1];

export interface DrizzleModuleOptions {
	client?: DatabaseClient;
	config: string | DatabaseConnectionOptions;
}
