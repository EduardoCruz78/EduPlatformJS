import { z } from 'zod';

const stringToUndefined = (value: string | undefined) => {
  if (value === undefined) {
    return undefined;
  }

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : undefined;
};

export const positiveIntSchema = z.number().int().positive();
export const nonNegativeIntSchema = z.number().int().min(0);

export const slugSchema = z
  .string()
  .trim()
  .min(1, 'Slug e obrigatorio')
  .max(160, 'Slug deve ter no maximo 160 caracteres')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug invalido');

export const requiredTrimmedString = (fieldName: string, maxLength = 255) =>
  z
    .string()
    .trim()
    .min(1, `${fieldName} e obrigatorio`)
    .max(maxLength, `${fieldName} deve ter no maximo ${maxLength} caracteres`);

export const optionalTrimmedString = (maxLength = 255) =>
  z
    .string()
    .optional()
    .transform(stringToUndefined)
    .pipe(
      z
        .string()
        .max(maxLength, `Campo deve ter no maximo ${maxLength} caracteres`)
        .optional()
    );

export const requiredUrlString = (fieldName: string) =>
  z
    .string()
    .trim()
    .min(1, `${fieldName} e obrigatorio`)
    .url(`${fieldName} deve ser uma URL valida`)
    .max(2048, `${fieldName} deve ter no maximo 2048 caracteres`);

export const optionalUrlString = () =>
  z
    .string()
    .optional()
    .transform(stringToUndefined)
    .pipe(
      z
        .string()
        .url('URL invalida')
        .max(2048, 'URL deve ter no maximo 2048 caracteres')
        .optional()
    );

export const optionalSlugString = () =>
  z
    .string()
    .optional()
    .transform(stringToUndefined)
    .pipe(slugSchema.optional());
