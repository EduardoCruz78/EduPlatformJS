import type {
  Vestibular,
  VestibularContent,
  VestibularSubject,
  VestibularTopic,
} from '@edu-platform/core';
import { SubjectMapper } from './subject.mapper.ts';
import { ContentMapper } from './content.mapper.ts';
import { TopicMapper } from './topic.mapper.ts';

type PrismaVestibularSubject = {
  vestibularId: number;
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
  vestibularTopicId?: number | null;
  title: string;
  type: string | null;
  link: string | null;
  pdfUrl: string | null;
  transcript: string | null;
  captionsUrl: string | null;
  librasUrl: string | null;
  audioDescriptionUrl: string | null;
  originalContentId: number | null;
  isShared: boolean;
  originalContent?: {
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
  } | null;
};

type PrismaVestibularTopic = {
  id: number;
  vestibularId: number;
  subjectId: number | null;
  name: string;
  originalTopicId: number | null;
  isShared: boolean;
  notes: string | null;
  tags: string | null;
  subject?: PrismaVestibularSubject['subject'] | null;
  originalTopic?: {
    id: number;
    name: string;
  } | null;
  contents?: PrismaVestibularContent[];
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
      vestibularId: data.vestibularId,
      subjectId: data.subjectId,
      subject: SubjectMapper.toDomain(data.subject),
    };
  }

  static toVestibularContent(data: PrismaVestibularContent): VestibularContent {
    return {
      id: data.id,
      vestibularId: data.vestibularId,
      vestibularTopicId: data.vestibularTopicId ?? null,
      title: data.title,
      type: data.type,
      link: data.link,
      pdfUrl: data.pdfUrl,
      transcript: data.transcript,
      captionsUrl: data.captionsUrl,
      librasUrl: data.librasUrl,
      audioDescriptionUrl: data.audioDescriptionUrl,
      isShared: data.isShared,
      originalContentId: data.originalContentId,
      content: data.originalContent ? ContentMapper.toDomain(data.originalContent) : null,
    };
  }

  static toVestibularTopic(data: PrismaVestibularTopic): VestibularTopic {
    return {
      id: data.id,
      vestibularId: data.vestibularId,
      subjectId: data.subjectId,
      name: data.name,
      originalTopicId: data.originalTopicId,
      isShared: data.isShared,
      notes: data.notes,
      tags: data.tags,
      subject: data.subject ? SubjectMapper.toDomain(data.subject) : null,
      topic: data.originalTopic ? TopicMapper.toDomain(data.originalTopic) : null,
      contents: data.contents?.map((content) => this.toVestibularContent(content)),
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
