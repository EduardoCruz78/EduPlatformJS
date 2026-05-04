// packages/core/src/dtos/admin.dto.ts

import type { ContentType, UserRole } from '../entities';

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
  transcript?: string | null;
  captionsUrl?: string | null;
  librasUrl?: string | null;
  audioDescriptionUrl?: string | null;
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
  transcript?: string | null;
  captionsUrl?: string | null;
  librasUrl?: string | null;
  audioDescriptionUrl?: string | null;
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

export interface CreatePracticalCategoryInput {
  name: string;
  description?: string | null;
  slug?: string | null;
  icon?: string | null;
  order?: number;
}

export interface UpdatePracticalCategoryInput {
  id: number;
  name?: string;
  description?: string | null;
  slug?: string | null;
  icon?: string | null;
  order?: number;
}

export interface CreatePracticalGuideInput {
  practicalCategoryId: number;
  title: string;
  summary: string;
  content: string;
  slug?: string | null;
  order?: number;
  isPublished?: boolean;
}

export interface UpdatePracticalGuideInput {
  id: number;
  practicalCategoryId?: number;
  title?: string;
  summary?: string;
  content?: string;
  slug?: string | null;
  order?: number;
  isPublished?: boolean;
}

export interface CreatePracticalGuideLinkInput {
  practicalGuideId: number;
  label: string;
  url: string;
  order?: number;
}

export interface UpdatePracticalGuideLinkInput {
  id: number;
  practicalGuideId?: number;
  label?: string;
  url?: string;
  order?: number;
}

export interface CreateAccessibilityThemeInput {
  accessibilityCategoryId: number;
  accessibilityNeedId?: number | null;
  title: string;
  content?: string | null;
}

export interface CreateAccessibilityThemeMaterialInput {
  accessibilityThemeId: number;
  title: string;
  summary: string;
  content: string;
  type: ContentType;
  link: string;
  order?: number;
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
  subjectId?: number | null;
  name: string;
  originalTopicId?: number | null;
  notes?: string | null;
  tags?: string | null;
}

export interface DeleteVestibularTopicInput {
  vestibularId: number;
  topicId: number;
}

export interface CreateVestibularContentInput {
  vestibularId: number;
  vestibularTopicId?: number | null;
  title: string;
  type?: string | null;
  link?: string | null;
  pdfUrl?: string | null;
  transcript?: string | null;
  captionsUrl?: string | null;
  librasUrl?: string | null;
  audioDescriptionUrl?: string | null;
}

export interface ShareVestibularContentInput {
  vestibularId: number;
  vestibularTopicId?: number | null;
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
  providerId?: string | null;
  name: string;
  email: string;
  role?: UserRole;
}

export interface UpdateUserRoleInput {
  actorUserId: string;
  targetUserId: string;
  role: UserRole;
}

export interface UpdateUserRoleWithAuditInput {
  actorUserId: string;
  targetUserId: string;
  previousRole: UserRole;
  newRole: UserRole;
}

export interface FindUserRoleAuditLogsInput {
  limit?: number;
  actorUserId?: string;
  targetUserId?: string;
}
