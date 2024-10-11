import { Prisma } from "@prisma/client";

export interface PrismaModuleOptions
	extends Prisma.Subset<
		Prisma.PrismaClientOptions,
		Prisma.PrismaClientOptions
	> {}
