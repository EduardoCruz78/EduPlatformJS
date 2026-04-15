// packages/infrastructure/src/container.ts

import {
    SeriesRepository,
    SubjectRepository,
    TopicRepository,
    ContentRepository,
    ChecklistRepository,
    VestibularRepository,
    UserRepository,
    AccessibilityRepository,
} from './repositories';

export function makeRepositories() {
    return {
        seriesRepository: new SeriesRepository(),
        subjectRepository: new SubjectRepository(),
        topicRepository: new TopicRepository(),
        contentRepository: new ContentRepository(),
        checklistRepository: new ChecklistRepository(),
        vestibularRepository: new VestibularRepository(),
        userRepository: new UserRepository(),
        accessibilityRepository: new AccessibilityRepository(),
    };
}

export type Repositories = ReturnType<typeof makeRepositories>;