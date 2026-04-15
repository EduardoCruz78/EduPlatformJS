// packages/infrastructure/src/mappers/vestibular.mapper.ts

import type {
    Subject,
    Topic,
    Vestibular,
    VestibularContent,
    VestibularSubject,
    VestibularTopic,
} from '@edu-platform/core';
import { SubjectMapper } from './subject.mapper';

type PrismaVestibularSubject = {
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

type PrismaVestibularContent = {
    id: number;
    vestibularId: number;
    title: string;
    type: string | null;
    link: string | null;
    pdfUrl: string | null;
    originalContentId: number | null;
    isShared: boolean;
};

type PrismaVestibularTopic = {
    id: number;
    vestibularId: number;
    name: string;
    originalTopicId: number | null;
    isShared: boolean;
    notes: string | null;
    tags: string | null;
};

type PrismaVestibular = {
    id: number;
    name: string;
    description: string | null;
    year: number | null;
    imageUrl: string | null;
    vestibularSubjects?: PrismaVestibularSubject[];
    vestibularContents?: PrismaVestibularContent[];
    vestibularTopics?: PrismaVestibularTopic[];
};

export class VestibularMapper {
    static toVestibularSubject(data: PrismaVestibularSubject): VestibularSubject {
        return {
            vestibularId: data.subjectId,
            subjectId: data.subjectId,
            subject: SubjectMapper.toDomain(data.subject) as Subject,
        };
    }

    static toVestibularContent(data: PrismaVestibularContent): VestibularContent {
        return {
            vestibularId: data.vestibularId,
            contentId: data.originalContentId ?? data.id,
        };
    }

    static toVestibularTopic(data: PrismaVestibularTopic): VestibularTopic {
        return {
            vestibularId: data.vestibularId,
            topicId: data.originalTopicId ?? data.id,
        };
    }

    static toDomain(data: PrismaVestibular): Vestibular {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            year: data.year,
            imageUrl: data.imageUrl,
            vestibularSubjects: data.vestibularSubjects?.map((item) =>
                this.toVestibularSubject(item)
            ),
            vestibularContents: data.vestibularContents?.map((item) =>
                this.toVestibularContent(item)
            ),
            vestibularTopics: data.vestibularTopics?.map((item) =>
                this.toVestibularTopic(item)
            ),
        };
    }

    static toDomainList(data: PrismaVestibular[]): Vestibular[] {
        return data.map((item) => this.toDomain(item));
    }
}