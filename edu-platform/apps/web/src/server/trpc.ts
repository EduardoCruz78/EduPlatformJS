import { AppError } from "@edu-platform/core";
import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError } from "zod";
import type { Context } from "./context";

function mapAppErrorToTrpcCode(error: AppError): TRPCError["code"] {
    switch (error.code) {
        case "VALIDATION_ERROR":
            return "BAD_REQUEST";
        case "NOT_FOUND":
            return "NOT_FOUND";
        case "CONFLICT":
            return "CONFLICT";
        case "UNAUTHORIZED":
            return "UNAUTHORIZED";
        case "FORBIDDEN":
            return "FORBIDDEN";
        case "INTERNAL_ERROR":
        default:
            return "INTERNAL_SERVER_ERROR";
    }
}

function toTRPCError(error: unknown): TRPCError {
    if (error instanceof TRPCError) {
        return error;
    }

    if (error instanceof AppError) {
        return new TRPCError({
            code: mapAppErrorToTrpcCode(error),
            message: error.message,
            cause: error,
        });
    }

    return new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro interno inesperado.",
        cause: error instanceof Error ? error : new Error("Unknown error"),
    });
}

const t = initTRPC.context<Context>().create({
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
                appError:
                    error.cause instanceof AppError
                        ? {
                            code: error.cause.code,
                            statusCode: error.cause.statusCode,
                            details: error.cause.details ?? null,
                        }
                        : null,
            },
        };
    },
});

const appProcedure = t.procedure.use(async (opts) => {
    try {
        return await opts.next();
    } catch (error) {
        throw toTRPCError(error);
    }
});

export const router = t.router;
export const publicProcedure = appProcedure;

export const protectedProcedure = appProcedure.use(async (opts) => {
    if (!opts.ctx.user) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Autenticacao obrigatoria.",
        });
    }

    return opts.next({
        ctx: {
            ...opts.ctx,
            user: opts.ctx.user,
        },
    });
});

export const adminProcedure = protectedProcedure.use(async (opts) => {
    if (opts.ctx.user.role !== "ADMIN") {
        throw new TRPCError({
            code: "FORBIDDEN",
            message: "Acesso restrito a administradores.",
        });
    }

    return opts.next({
        ctx: {
            ...opts.ctx,
            user: opts.ctx.user,
        },
    });
});
