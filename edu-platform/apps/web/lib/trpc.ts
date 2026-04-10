// apps/web/lib/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { auth } from './auth';
import type { NextRequest } from 'next/server';
import superjson from 'superjson';

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  const session = await auth();
  return {
    session,
    req: opts.req as NextRequest, // cast seguro no Next.js App Router
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.session?.user?.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      ...ctx,
      userId: ctx.session.user.id,
    },
  });
});