// packages/core/src/use-cases/index.ts

// Series
export { GetAllSeriesUseCase } from './series/get-all.use-case';
export { CreateSeriesUseCase } from './series/create-series.use-case';
export { UpdateSeriesUseCase } from './series/update-series.use-case';
export { DeleteSeriesUseCase } from './series/delete-series.use-case';

// Subject
export { GetSubjectsBySeriesUseCase } from './subject/get-by-series.use-case';
export { CreateSubjectUseCase } from './subject/create-subject.use-case';
export { UpdateSubjectUseCase } from './subject/update-subject.use-case';
export { DeleteSubjectUseCase } from './subject/delete-subject.use-case';

// Topic
export { GetAllTopicsUseCase } from './topic/get-all.use-case'; // ✅ NOVO
export { GetTopicsBySubjectUseCase } from './topic/get-by-subject.use-case';
export { CreateTopicUseCase } from './topic/create-topic.use-case';
export { UpdateTopicUseCase } from './topic/update-topic.use-case';
export { DeleteTopicUseCase } from './topic/delete-topic.use-case';

// Content
export { GetContentsByTopicUseCase } from './content/get-by-topic.use-case';
export { CreateContentUseCase } from './content/create-content.use-case';
export { UpdateContentUseCase } from './content/update-content.use-case';
export { DeleteContentUseCase } from './content/delete-content.use-case';

// Checklist
export { CreateChecklistUseCase } from './checklist/create-checklist.use-case';
export { GetChecklistByUserUseCase } from './checklist/get-by-user.use-case';
export { DeleteChecklistUseCase } from './checklist/delete-checklist.use-case';

// Vestibular
export { GetAvailableVestibularsUseCase } from './vestibular/get-available.use-case';
export { CreateVestibularUseCase } from './vestibular/create-vestibular.use-case';
export { UpdateVestibularUseCase } from './vestibular/update-vestibular.use-case';
export { DeleteVestibularUseCase } from './vestibular/delete-vestibular.use-case';

// User
export { FindOrCreateUserUseCase } from './user/find-or-create.use-case';

// Accessibility
export { GetAccessibilityCategoriesUseCase } from './accessibility/get-categories.use-case';