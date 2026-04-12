// apps/web/src/server/utils/typeConverters.ts

/**
 * Converters para alinhar tipos entre tRPC (number) e Use Cases (string)
 * Padrão: Sempre converter number → string quando necessário
 */

export const typeConverters = {
  // Converter ID numérico para string
  idToString: (id: number): string => String(id),
  
  // Converter múltiplos IDs
  idsToStrings: (ids: number[]): string[] => ids.map(String),
  
  // Converter array de números para strings (para subjectIds, etc)
  arrayToStrings: (arr: number[] | undefined): string[] | undefined => 
    arr ? arr.map(String) : undefined,
  
  // Converter objeto com ID
  withIdAsString: <T extends { id: number }>(obj: T): Omit<T, 'id'> & { id: string } => ({
    ...obj,
    id: String(obj.id),
  }),
};