// packages/core/src/dtos/response.dto.ts

export interface DeleteResponseDto {
    success: boolean;
}

export interface EntityResponseDto<T> {
    data: T;
}

export interface ListResponseDto<T> {
    items: T[];
    total: number;
}