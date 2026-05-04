import { describe, expect, it } from 'vitest';

import type { Context } from '@/server/context';
import { appRouter } from './index';

function createSearchContext() {
  return {
    session: null,
    user: null,
    seriesRepository: {
      async find() {
        return [
          {
            id: 1,
            name: '1 ano do Ensino Fundamental',
            subjects: [{ id: 10, name: 'Matematica inicial', seriesId: 1 }],
          },
          {
            id: 3,
            name: '3 serie do Ensino Medio',
            subjects: [
              {
                id: 30,
                name: 'Matematica',
                description: 'Algebra, geometria e funcoes',
                seriesId: 3,
              },
            ],
          },
        ];
      },
    },
    topicRepository: {
      async find() {
        return [
          {
            id: 100,
            name: 'Algebra linear',
            subjects: [{ id: 30, name: 'Matematica', seriesId: 3 }],
          },
          {
            id: 101,
            name: 'Numerais',
            subjects: [{ id: 10, name: 'Matematica inicial', seriesId: 1 }],
          },
        ];
      },
    },
  } as unknown as Context;
}

describe('searchRouter', () => {
  it('returns only unlocked series, subjects and topics ordered by relevance', async () => {
    const caller = appRouter.createCaller(createSearchContext());

    const results = await caller.search.query({ q: 'algebra' });

    expect(results).toHaveLength(2);
    expect(results[0]).toMatchObject({
      kind: 'topico',
      title: 'Algebra linear',
      href: '/contents?topicId=100&subjectId=30&seriesId=3',
    });
    expect(results[1]).toMatchObject({
      kind: 'materia',
      title: 'Matematica',
      href: '/topics?subjectId=30&seriesId=3',
    });
    expect(results).not.toContainEqual(
      expect.objectContaining({ title: '1 ano do Ensino Fundamental' })
    );
  });

  it('normalizes accents and whitespace before matching', async () => {
    const caller = appRouter.createCaller(createSearchContext());

    const results = await caller.search.query({ q: '  álgebra   linear  ' });

    expect(results[0]).toMatchObject({
      kind: 'topico',
      title: 'Algebra linear',
    });
  });

  it('rejects oversized search queries before touching repositories', async () => {
    const caller = appRouter.createCaller(createSearchContext());

    await expect(caller.search.query({ q: 'x'.repeat(121) })).rejects.toThrow();
  });
});
