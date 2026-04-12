import { prisma } from '../prisma/client';

// Importar as classes
import { SeriesRepository } from './series.repository';
import { SubjectRepository } from './subject.repository';
import { TopicRepository } from './topic.repository';
import { ContentRepository } from './content.repository';
import { ChecklistRepository } from './checklist.repository';
import { VestibularRepository } from './vestibular.repository';
import { UserRepository } from './user.repository';
import { AccessibilityRepository } from './accessibility.repository';

// ✅ INSTANCIAR COM PRISMA (CRÍTICO!)
export const seriesRepository = new SeriesRepository(prisma);
export const subjectRepository = new SubjectRepository(prisma);
export const topicRepository = new TopicRepository(prisma);
export const contentRepository = new ContentRepository(prisma);
export const checklistRepository = new ChecklistRepository(prisma);
export const vestibularRepository = new VestibularRepository(prisma);
export const userRepository = new UserRepository(prisma);
export const accessibilityRepository = new AccessibilityRepository(prisma);

// Exportar as classes também
export { SeriesRepository };
export { SubjectRepository };
export { TopicRepository };
export { ContentRepository };
export { ChecklistRepository };
export { VestibularRepository };
export { UserRepository };
export { AccessibilityRepository };