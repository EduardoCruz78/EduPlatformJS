import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";
import type { Context } from "./context";

const t = initTRPC.context<Context>().create({
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async (opts) => {
    if (!opts.ctx.user) {
        throw new Error("Não autenticado");
    }

    return opts.next({
        ctx: {
            ...opts.ctx,
            user: opts.ctx.user,
        },
    });
});