// apps/web/lib/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import { auth } from './auth';
import type { NextRequest } from 'next/server';
import superjson from 'superjson';

export const createTRPCContext = async (req: NextRequest) => {
  const session = await auth();
  return {
    session,
    req,
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