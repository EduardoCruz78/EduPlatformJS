export type BaseResponse<T> = {
    success: true;
    data: T;
};

export type ErrorResponse = {
    success: false;
    error: {
        message: string;
        code: string;
        details?: unknown;
    };
};