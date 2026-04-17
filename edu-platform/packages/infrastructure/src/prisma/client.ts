import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { databaseEnv, getDatabaseUrl } from "../config/env";

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: ["error", "warn"],
    });

if (databaseEnv.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
