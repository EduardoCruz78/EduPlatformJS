import "dotenv/config";
import { defineConfig } from "prisma/config";

const prismaUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

if (!prismaUrl) {
  throw new Error(
    "Prisma requires DATABASE_URL or DIRECT_URL to be defined before running CLI commands."
  );
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: prismaUrl,
  },
});
