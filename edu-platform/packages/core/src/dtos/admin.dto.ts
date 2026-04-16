// packages/core/src/dtos/admin.dto.ts

import type { ContentType } from '../entities';

export interface CreateSeriesInput {
  name: string;
}

export interface UpdateSeriesInput {
  id: number;
  name?: string;
}

export interface CreateSubjectInput {
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
}

export interface UpdateSubjectInput {
  id: number;
  name?: string;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
}

export interface CreateTopicInput {
  name: string;
  subjectIds: number[];
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
}

export interface UpdateTopicInput {
  id: number;
  name?: string;
  subjectIds?: number[];
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
}

export interface CreateContentInput {
  title: string;
  description?: string | null;
  topicId: number;
  type: ContentType;
  link: string;
  thumbnailUrl: string;
  videoUrl?: string | null;
  pdfUrl?: string | null;
  order?: number;
}

export interface UpdateContentInput {
  id: number;
  title?: string;
  description?: string | null;
  topicId?: number;
  type?: ContentType;
  link?: string;
  videoUrl?: string | null;
  pdfUrl?: string | null;
  thumbnailUrl?: string | null;
  order?: number;
}

export interface CreateVestibularInput {
  name: string;
  description: string;
  year: number;
  imageUrl?: string | null;
}

export interface UpdateVestibularInput {
  id: number;
  name?: string;
  description?: string;
  year?: number;
  imageUrl?: string | null;
}

export interface CreateChecklistInput {
  userId: string;
  contentId: number;
}

export interface CreateUserInput {
  providerId: string;
  name: string;
  email: string;
}
