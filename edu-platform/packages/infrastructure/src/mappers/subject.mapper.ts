// packages/infrastructure/src/mappers/subject.mapper.ts

import type { Series, Subject } from '@edu-platform/core';

type PrismaSeries = {
    id: number;
    name: string;
};

type PrismaSubject = {
    id: number;
    name: string;
    description: string | null;
    imageUrl: string | null;
    order: number;
    seriesId: number | null;
    series?: PrismaSeries | null;
};

export class SubjectMapper {
    static toDomain(data: PrismaSubject): Subject {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            order: data.order,
            seriesId: data.seriesId,
            series: data.series
                ? {
                    id: data.series.id,
                    name: data.series.name,
                } satisfies Series
                : undefined,
        };
    }

    static toDomainList(data: PrismaSubject[]): Subject[] {
        return data.map((item) => this.toDomain(item));
    }
}