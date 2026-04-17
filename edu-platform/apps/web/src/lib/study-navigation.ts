type NullableNumber = number | null | undefined;

function isValidId(value: NullableNumber): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function toQueryString(entries: Array<[string, NullableNumber]>) {
  const searchParams = new URLSearchParams();

  entries.forEach(([key, value]) => {
    if (isValidId(value)) {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

export function buildSubjectsHref(seriesId?: NullableNumber) {
  return `/subjects${toQueryString([['seriesId', seriesId]])}`;
}

export function buildTopicsHref({
  subjectId,
  seriesId,
}: {
  subjectId?: NullableNumber;
  seriesId?: NullableNumber;
}) {
  return `/topics${toQueryString([
    ['subjectId', subjectId],
    ['seriesId', seriesId],
  ])}`;
}

export function buildContentsHref({
  topicId,
  subjectId,
  seriesId,
}: {
  topicId?: NullableNumber;
  subjectId?: NullableNumber;
  seriesId?: NullableNumber;
}) {
  return `/contents${toQueryString([
    ['topicId', topicId],
    ['subjectId', subjectId],
    ['seriesId', seriesId],
  ])}`;
}
