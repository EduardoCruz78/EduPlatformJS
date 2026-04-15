export type ErrorCode =
    | 'VALIDATION_ERROR'
    | 'NOT_FOUND'
    | 'CONFLICT'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'INTERNAL_ERROR';

type AppErrorParams = {
    message: string;
    code: ErrorCode;
    statusCode?: number;
    details?: unknown;
};

export class AppError extends Error {
    public readonly code: ErrorCode;
    public readonly statusCode: number;
    public readonly details?: unknown;

    constructor({ message, code, statusCode, details }: AppErrorParams) {
        super(message);

        this.code = code;
        this.statusCode = statusCode ?? 500;
        this.details = details;

        Object.setPrototypeOf(this, AppError.prototype);
    }

    static notFound(message = 'Resource not found') {
        return new AppError({
            message,
            code: 'NOT_FOUND',
            statusCode: 404,
        });
    }

    static validation(message: string, details?: unknown) {
        return new AppError({
            message,
            code: 'VALIDATION_ERROR',
            statusCode: 400,
            details,
        });
    }

    static conflict(message: string) {
        return new AppError({
            message,
            code: 'CONFLICT',
            statusCode: 409,
        });
    }

    static internal(message = 'Internal server error') {
        return new AppError({
            message,
            code: 'INTERNAL_ERROR',
            statusCode: 500,
        });
    }
}