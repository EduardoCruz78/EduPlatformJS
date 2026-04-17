import { z } from 'zod';

const databaseEnvSchema = z
  .object({
    DATABASE_URL: z.string().min(1).optional(),
    DIRECT_URL: z.string().min(1).optional(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .optional()
      .default('development'),
  })
  .superRefine((env, ctx) => {
    if (!env.DATABASE_URL && !env.DIRECT_URL) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'DATABASE_URL or DIRECT_URL must be defined.',
        path: ['DATABASE_URL'],
      });
    }
  });

const parsedDatabaseEnv = databaseEnvSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
  NODE_ENV: process.env.NODE_ENV,
});

export const databaseEnv = parsedDatabaseEnv;

export function getDatabaseUrl() {
  return databaseEnv.DATABASE_URL ?? databaseEnv.DIRECT_URL!;
}

export function getDirectDatabaseUrl() {
  return databaseEnv.DIRECT_URL ?? getDatabaseUrl();
}
