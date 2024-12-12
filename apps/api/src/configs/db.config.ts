import { registerAs } from "@nestjs/config";
import mysql from "mysql2/promise";

export default registerAs('db', () => {
    const client = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
    return ({
        drizzle: {
            mode: 'default',
            client,
            logging: process.env.DB_LOG,
        }
    });
});