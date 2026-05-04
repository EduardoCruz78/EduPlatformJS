// packages/core/src/entities/index.ts

export type UserRole = 'USER' | 'ADMIN';
export type ContentType = 'VIDEO' | 'PDF' | 'ARTICLE';

export interface User {
  id: string;
  providerId?: string | null;
  name: string;
  email: string;
  role: UserRole;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserRoleAuditLog {
  id: number;
  actorUserId: string;
  targetUserId: string;
  previousRole: UserRole;
  newRole: UserRole;
  createdAt: Date;
  actor?: User | null;
  target?: User | null;
}

export interface Series {
  id: number;
  name: string;
  subjects?: Subject[];
}

export interface Subject {
  id: number;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
  series?: Series | null;
}

export interface TopicSubject {
  topicId: number;
  subjectId: number;
  subject?: Subject | null;
}

export interface Content {
  id: number;
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
  topic?: Topic | null;
}

export interface Topic {
  id: number;
  name: string;
  contents?: Content[];
  topicSubjects?: TopicSubject[];
  subjects?: Subject[];
}

export interface Checklist {
  id: number;
  userId: string;
  contentId: number;
  createdAt: Date;
  content?: Content | null;
  user?: User | null;
}

export interface VestibularContent {
  id: number;
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
  isShared: boolean;
  originalContentId?: number | null;
  content?: Content | null;
}

export interface VestibularTopic {
  id: number;
  vestibularId: number;
  subjectId?: number | null;
  name: string;
  originalTopicId?: number | null;
  isShared: boolean;
  notes?: string | null;
  tags?: string | null;
  topic?: Topic | null;
  subject?: Subject | null;
  contents?: VestibularContent[];
}

export interface VestibularSubject {
  vestibularId: number;
  subjectId: number;
  subject?: Subject | null;
}

export interface Vestibular {
  id: number;
  name: string;
  description?: string | null;
  year?: number | null;
  imageUrl?: string | null;
  vestibularSubjects?: VestibularSubject[];
  vestibularContents?: VestibularContent[];
  vestibularTopics?: VestibularTopic[];
}

export interface AccessibilityNeed {
  id: number;
  name: string;
  accessibilityCategoryId: number;
}

export interface AccessibilityTheme {
  id: number;
  title: string;
  accessibilityCategoryId: number;
  accessibilityNeedId?: number | null;
  content?: string | null;
  materials?: AccessibilityThemeMaterial[];
}

export interface AccessibilityThemeMaterial {
  id: number;
  accessibilityThemeId: number;
  title: string;
  summary: string;
  content: string;
  type: ContentType;
  link: string;
  order?: number;
}

export interface AccessibilityCategory {
  id: number;
  name: string;
  description?: string | null;
  needs?: AccessibilityNeed[];
  themes?: AccessibilityTheme[];
  topics?: Topic[];
}

export interface PracticalGuideLink {
  id: number;
  practicalGuideId: number;
  label: string;
  url: string;
  order?: number;
}

export interface PracticalGuide {
  id: number;
  practicalCategoryId: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  order?: number;
  isPublished: boolean;
  links?: PracticalGuideLink[];
}

export interface PracticalCategory {
  id: number;
  name: string;
  description?: string | null;
  slug: string;
  icon?: string | null;
  order?: number;
  guides?: PracticalGuide[];
}
