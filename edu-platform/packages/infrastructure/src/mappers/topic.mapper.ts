// packages/infrastructure/src/mappers/topic.mapper.ts

import type { Content, Subject, Topic, TopicSubject } from '@edu-platform/core';
import { ContentMapper } from './content.mapper.ts';
import { SubjectMapper } from './subject.mapper.ts';

type PrismaTopicSubject = {
    topicId: number;
    subjectId: number;
    subject: {
        id: number;
        name: string;
        description: string | null;
        imageUrl: string | null;
        order: number;
        seriesId: number | null;
        series?: {
            id: number;
            name: string;
        } | null;
    };
};

type PrismaTopic = {
    id: number;
    name: string;
    contents?: Array<{
        id: number;
        title: string;
        description: string | null;
        type: string;
        link: string;
        thumbnailUrl: string;
        videoUrl: string | null;
        pdfUrl: string | null;
        transcript: string | null;
        captionsUrl: string | null;
        librasUrl: string | null;
        audioDescriptionUrl: string | null;
        order: number;
        topicId: number;
    }>;
    topicSubjects?: PrismaTopicSubject[];
};

export class TopicMapper {
    static toTopicSubject(data: PrismaTopicSubject): TopicSubject {
        return {
            topicId: data.topicId,
            subjectId: data.subjectId,
            subject: SubjectMapper.toDomain(data.subject),
        };
    }

    static toDomain(data: PrismaTopic): Topic {
        return {
            id: data.id,
            name: data.name,
            contents: data.contents?.map((content) =>
                ContentMapper.toDomain(content)
            ),
            topicSubjects: data.topicSubjects?.map((item) =>
                this.toTopicSubject(item)
            ),
            subjects: data.topicSubjects?.map((item) =>
                SubjectMapper.toDomain(item.subject)
            ),
        };
    }

    static toDomainList(data: PrismaTopic[]): Topic[] {
        return data.map((item) => this.toDomain(item));
    }
}
