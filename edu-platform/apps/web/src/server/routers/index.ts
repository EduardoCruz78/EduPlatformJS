// apps/web/src/server/routers/index.ts
import { router } from "@/server/trpc";  // ✅ Import correto
import { seriesRouter } from "./series";
import { subjectRouter } from "./subject";
import { topicRouter } from "./topic";
import { contentRouter } from "./content";
import { checklistRouter } from "./checklist";
import { vestibularRouter } from "./vestibular";

export const appRouter = router({
  series: seriesRouter,
  subject: subjectRouter,
  topic: topicRouter,
  content: contentRouter,
  checklist: checklistRouter,
  vestibular: vestibularRouter,
});

export type AppRouter = typeof appRouter;