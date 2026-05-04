import { router, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import { FindSeriesUseCase, FindTopicsUseCase, type Series, type Subject, type Topic } from '@edu-platform/core';
import {
  isLockedSeriesName,
  normalizeEducationLabel,
} from '@/lib/content-locks';
import { buildContentsHref, buildSubjectsHref, buildTopicsHref } from '@/lib/study-navigation';

type SearchResult = {
  id: string;
  kind: 'serie' | 'materia' | 'topico';
  title: string;
  description: string;
  href: string;
  badge: string;
  score: number;
};

export const searchRouter = router({
  query: publicProcedure
    .input(z.object({ q: z.string().trim().max(120) }))
    .query(async ({ input, ctx }) => {
      const { q } = input;
      const normalizedQuery = normalizeEducationLabel(q);

      if (!normalizedQuery) {
        return [];
      }

      const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
      const results: SearchResult[] = [];

      const matchesTokens = (value: string) => tokens.every((token) => value.includes(token));
      const buildScore = (title: string, context: string, weight: number) => {
        const normalizedTitle = normalizeEducationLabel(title);
        const normalizedContext = normalizeEducationLabel(context);
        let score = weight;

        if (normalizedTitle === normalizedQuery) {
          score += 120;
        } else if (normalizedTitle.startsWith(normalizedQuery)) {
          score += 80;
        } else if (normalizedTitle.includes(normalizedQuery)) {
          score += 48;
        }

        if (normalizedContext.includes(normalizedQuery)) {
          score += 20;
        }

        score -= normalizedTitle.length / 100;
        return score;
      };

      const findSeriesUseCase = new FindSeriesUseCase(ctx.seriesRepository);
      const findTopicsUseCase = new FindTopicsUseCase(ctx.topicRepository);

      const [series, topics] = await Promise.all([
        findSeriesUseCase.execute(),
        findTopicsUseCase.execute(),
      ]);

      series.forEach((serie: Series) => {
        if (isLockedSeriesName(serie.name)) {
          return;
        }

        const seriesSearchable = normalizeEducationLabel(`${serie.name} serie ano`);
        if (matchesTokens(seriesSearchable)) {
          results.push({
            id: `series-${serie.id}`,
            kind: 'serie',
            title: serie.name,
            description: `${serie.subjects?.length ?? 0} matérias vinculadas`,
            href: buildSubjectsHref(serie.id),
            badge: 'Série',
            score: buildScore(serie.name, seriesSearchable, 30),
          });
        }

        (serie.subjects ?? []).forEach((subject: Subject) => {
          const subjectContext = `${subject.name} ${serie.name}`;
          const subjectSearchable = normalizeEducationLabel(
            `${subject.name} ${subject.description ?? ''} ${serie.name}`
          );

          if (matchesTokens(subjectSearchable)) {
            results.push({
              id: `subject-${subject.id}`,
              kind: 'materia',
              title: subject.name,
              description: `${serie.name} - materia`,
              href: buildTopicsHref({ subjectId: subject.id, seriesId: serie.id }),
            badge: 'Matéria',
              score: buildScore(subject.name, subjectContext, 45),
            });
          }
        });
      });

      topics.forEach((topic: Topic) => {
        (topic.subjects ?? []).forEach((subject: Subject) => {
          const seriesItem = series.find((s: Series) => s.id === subject.seriesId);
          if (seriesItem && isLockedSeriesName(seriesItem.name)) {
            return;
          }

          const topicContext = `${topic.name} ${subject.name} ${seriesItem?.name ?? ''}`;
          const topicSearchable = normalizeEducationLabel(
            `${topic.name} ${subject.name} ${seriesItem?.name ?? ''}`
          );

          if (!matchesTokens(topicSearchable)) {
            return;
          }

          results.push({
            id: `topic-${topic.id}-${subject.id}`,
            kind: 'topico',
            title: topic.name,
            description: `${subject.name} - ${seriesItem?.name ?? 'Serie não identificada'}`,
            href: buildContentsHref({
              topicId: topic.id,
              subjectId: subject.id,
              seriesId: seriesItem?.id,
            }),
            badge: 'Tópico',
            score: buildScore(topic.name, topicContext, 70),
          });
        });
      });

      return results.sort((left, right) => right.score - left.score).slice(0, 12);
    }),
});
