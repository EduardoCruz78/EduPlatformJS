export type SeriesGroup = 'fundamental' | 'medio';

export const COMING_SOON_LABEL = 'Em breve';

export function normalizeEducationLabel(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u00ba\u00b0\u00aa]/g, '')
    .replace(/[\u2013\u2014-]/g, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

export function getSeriesMeta(name: string) {
  const normalized = normalizeEducationLabel(name);
  const fundamentalMatch = normalized.match(/(\d+)\s*ano/);
  const medioMatch = normalized.match(/(\d+)\s*serie/);

  if (fundamentalMatch || normalized.includes('fundamental')) {
    return {
      group: 'fundamental' as SeriesGroup,
      order: fundamentalMatch ? Number(fundamentalMatch[1]) : Number.MAX_SAFE_INTEGER - 1,
    };
  }

  if (medioMatch || normalized.includes('medio')) {
    return {
      group: 'medio' as SeriesGroup,
      order: medioMatch ? Number(medioMatch[1]) : Number.MAX_SAFE_INTEGER - 1,
    };
  }

  return {
    group: 'fundamental' as SeriesGroup,
    order: Number.MAX_SAFE_INTEGER,
  };
}

export function isLockedSeriesName(name: string) {
  void name;
  return false;
}

const LOCKED_MODULE_PATHS = new Set<string>();

export function isLockedModulePath(path: string) {
  const normalized = path.trim().toLowerCase();
  const modulePath = normalized.startsWith('/') ? normalized : `/${normalized}`;

  return LOCKED_MODULE_PATHS.has(modulePath);
}
