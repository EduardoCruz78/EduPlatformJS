import type { Series, Subject } from '@edu-platform/core';
import { SubjectMapper } from './subject.mapper.ts';

type PrismaSubject = {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  order: number;
  seriesId: number | null;
};

type PrismaSeries = {
  id: number;
  name: string;
  subjects?: PrismaSubject[];
};

export class SeriesMapper {
  static toDomain(data: PrismaSeries): Series {
    return {
      id: data.id,
      name: data.name,
      subjects: data.subjects?.map((subject) => SubjectMapper.toDomain(subject)) as Subject[] | undefined,
    };
  }

  static toDomainList(data: PrismaSeries[]): Series[] {
    return data.map((item) => this.toDomain(item));
  }
}
