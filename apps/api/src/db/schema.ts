import { UserStatusEnum } from "@/enums";
import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/mysql-core";

export const dateColumns = {
    updatedAt: t.datetime("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull().$onUpdate(() => sql`CURRENT_TIMESTAMP`),
    createdAt: t.datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    deletedAt: t.datetime("deleted_at"),
};

export const User = t.mysqlTable("t_user", {
    id: t.int().primaryKey().autoincrement(),
    email: t.varchar({ length: 255 }).notNull().unique(),
    passHash: t.varchar({ length: 255 }).notNull(),
    passSalt: t.varchar({ length: 255 }).notNull(),
    avatar: t.varchar({ length: 255 }),
    balance: t.decimal().notNull().default('0'),
    status: t.tinyint().notNull().default(UserStatusEnum.DEFAULT),
    version: t.int().notNull().default(0).$onUpdateFn(() => sql`version + 1`),
    ...dateColumns,
});

export const UserOAuth = t.mysqlTable(
    "t_user_oauth",
    {
        id: t.int().primaryKey().autoincrement(),
        provider: t.varchar({ length: 255 }).notNull(),
        providerId: t.varchar({ length: 255 }).notNull().unique(),
        info: t.json(),
        ...dateColumns,
    }
);
