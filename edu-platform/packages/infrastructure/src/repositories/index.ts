// packages/infrastructure/src/repositories/index.ts

import { SeriesRepository } from './series.repository';
import { SubjectRepository } from './subject.repository';
import { TopicRepository } from './topic.repository';
import { ContentRepository } from './content.repository';
import { ChecklistRepository } from './checklist.repository';
import { VestibularRepository } from './vestibular.repository';
import { UserRepository } from './user.repository';
import { AccessibilityRepository } from './accessibility.repository';

// ✅ INSTANCIAR SEM ARGUMENTOS (padrão singleton)
export const seriesRepository = new SeriesRepository();
export const subjectRepository = new SubjectRepository();
export const topicRepository = new TopicRepository();
export const contentRepository = new ContentRepository();
export const checklistRepository = new ChecklistRepository();
export const vestibularRepository = new VestibularRepository();
export const userRepository = new UserRepository();
export const accessibilityRepository = new AccessibilityRepository();

// Exportar as classes também
export {
  SeriesRepository,
  SubjectRepository,
  TopicRepository,
  ContentRepository,
  ChecklistRepository,
  VestibularRepository,
  UserRepository,
  AccessibilityRepository,
};