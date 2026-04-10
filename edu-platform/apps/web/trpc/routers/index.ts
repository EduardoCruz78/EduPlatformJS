// apps/web/trpc/routers/index.ts
import { router } from '../../lib/trpc';
import { GetAllSeriesUseCase } from '@edu-platform/core/use-cases';
import { GetSubjectsBySeriesUseCase } from '@edu-platform/core/use-cases';
import { GetTopicsBySubjectUseCase } from '@edu-platform/core/use-cases';
import { GetContentsByTopicUseCase } from '@edu-platform/core/use-cases';
import { CreateChecklistUseCase } from '@edu-platform/core/use-cases';
import { GetChecklistByUserUseCase } from '@edu-platform/core/use-cases';
import { GetAvailableVestibularsUseCase } from '@edu-platform/core/use-cases';
import { GetAccessibilityCategoriesUseCase } from '@edu-platform/core/use-cases';

import {
  SeriesRepository,
  SubjectRepository,
  TopicRepository,
  ContentRepository,
  ChecklistRepository,
  VestibularRepository,
  AccessibilityRepository,
} from '@edu-platform/infrastructure';

// Instâncias dos repositórios (pode ser injetado via container no futuro)
const seriesRepo = new SeriesRepository();
const subjectRepo = new SubjectRepository();
const topicRepo = new TopicRepository();
const contentRepo = new ContentRepository();
const checklistRepo = new ChecklistRepository();
const vestibularRepo = new VestibularRepository();
const accessibilityRepo = new AccessibilityRepository();

// Instâncias dos use-cases
const getAllSeries = new GetAllSeriesUseCase(seriesRepo);
const getSubjectsBySeries = new GetSubjectsBySeriesUseCase(subjectRepo);
const getTopicsBySubject = new GetTopicsBySubjectUseCase(topicRepo);
const getContentsByTopic = new GetContentsByTopicUseCase(contentRepo);
const createChecklist = new CreateChecklistUseCase(checklistRepo);
const getChecklistByUser = new GetChecklistByUserUseCase(checklistRepo);
const getAvailableVestibulars = new GetAvailableVestibularsUseCase(vestibularRepo);
const getAccessibilityCategories = new GetAccessibilityCategoriesUseCase(accessibilityRepo);

export const appRouter = router({
  series: router({
    getAll: publicProcedure.query(() => getAllSeries.execute()),
  }),

  subject: router({
    getBySeries: publicProcedure
      .input((val: unknown) => val as { seriesId: number })
      .query(({ input }) => getSubjectsBySeries.execute(input.seriesId)),
  }),

  topic: router({
    getBySubject: publicProcedure
      .input((val: unknown) => val as { subjectId: number })
      .query(({ input }) => getTopicsBySubject.execute(input.subjectId)),
  }),

  content: router({
    getByTopic: publicProcedure
      .input((val: unknown) => val as { topicId: number })
      .query(({ input }) => getContentsByTopic.execute(input)),
  }),

  checklist: router({
    create: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ input }) => createChecklist.execute(input)),

    getByUser: protectedProcedure.query(({ ctx }) =>
      getChecklistByUser.execute(ctx.userId)
    ),
  }),

  vestibular: router({
    getAvailable: publicProcedure.query(() => getAvailableVestibulars.execute()),
  }),

  accessibility: router({
    getCategories: publicProcedure.query(() => getAccessibilityCategories.execute()),
  }),
});

export type AppRouter = typeof appRouter;