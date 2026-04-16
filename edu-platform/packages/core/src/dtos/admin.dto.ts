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
}

export interface UpdateTopicInput {
  id: number;
  name?: string;
  subjectIds?: number[];
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

export interface CreateAccessibilityCategoryInput {
  name: string;
  description?: string | null;
}

export interface CreateAccessibilityThemeInput {
  accessibilityCategoryId: number;
  accessibilityNeedId?: number | null;
  title: string;
  content?: string | null;
}

export interface AddAccessibilityCategoryTopicInput {
  accessibilityCategoryId: number;
  topicId: number;
}

export interface CreateVestibularSubjectInput {
  vestibularId: number;
  name: string;
}

export interface AttachVestibularSubjectInput {
  vestibularId: number;
  subjectId: number;
}

export interface DeleteVestibularSubjectInput {
  vestibularId: number;
  subjectId: number;
}

export interface CreateVestibularTopicInput {
  vestibularId: number;
  name: string;
  notes?: string | null;
  tags?: string | null;
}

export interface DeleteVestibularTopicInput {
  vestibularId: number;
  topicId: number;
}

export interface CreateVestibularContentInput {
  vestibularId: number;
  title: string;
  type?: string | null;
  link?: string | null;
  pdfUrl?: string | null;
}

export interface ShareVestibularContentInput {
  vestibularId: number;
  contentId: number;
}

export interface DeleteVestibularContentInput {
  vestibularId: number;
  contentId: number;
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
