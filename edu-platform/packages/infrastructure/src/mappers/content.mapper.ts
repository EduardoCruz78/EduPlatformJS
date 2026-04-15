// packages/infrastructure/src/mappers/content.mapper.ts

import type { Content, ContentType } from '@edu-platform/core';

type PrismaContent = {
    id: number;
    title: string;
    description: string | null;
    type: string;
    link: string;
    thumbnailUrl: string;
    videoUrl: string | null;
    pdfUrl: string | null;
    order: number;
    topicId: number;
};

export class ContentMapper {
    static toDomain(data: PrismaContent): Content {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            type: data.type as ContentType,
            link: data.link,
            thumbnailUrl: data.thumbnailUrl,
            videoUrl: data.videoUrl,
            pdfUrl: data.pdfUrl,
            order: data.order,
            topicId: data.topicId,
        };
    }

    static toDomainList(data: PrismaContent[]): Content[] {
        return data.map((item) => this.toDomain(item));
    }
}