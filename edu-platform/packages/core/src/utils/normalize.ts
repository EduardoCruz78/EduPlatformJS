// packages/core/src/utils/normalize.ts

export function normalizeNullableString(
    value: string | null | undefined,
    fallback: string | null = null
): string | null {
    if (value === undefined) return fallback;
    if (value === null) return null;

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}

export function normalizeString(
    value: string | undefined,
    fallback: string
): string {
    if (value === undefined) return fallback;

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
}

export function normalizeNumber(
    value: number | undefined,
    fallback: number
): number {
    return value ?? fallback;
}