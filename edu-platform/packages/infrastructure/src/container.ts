import {
    ContentRepository,
    ChecklistRepository,
    SeriesRepository,
    SubjectRepository,
    TopicRepository,
    VestibularRepository,
    UserRepository,
    AccessibilityRepository,
} from './repositories';

export const makeRepositories = () => {
    return {
        contentRepository: new ContentRepository(),
        checklistRepository: new ChecklistRepository(),
        seriesRepository: new SeriesRepository(),
        subjectRepository: new SubjectRepository(),
        topicRepository: new TopicRepository(),
        vestibularRepository: new VestibularRepository(),
        userRepository: new UserRepository(),
        accessibilityRepository: new AccessibilityRepository(),
    };
};