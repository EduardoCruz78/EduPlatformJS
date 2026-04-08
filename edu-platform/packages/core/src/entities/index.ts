// packages/core/src/entities/index.ts
// User
export interface User {
  id: string;
  providerId: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  providerId: string;
  name: string;
  email: string;
}

// Checklist
export interface Checklist {
  id: number;
  userId: string;
  contentId: number;
  createdAt: Date;
}

// Series, Subject, Topic, Content
export interface Series {
  id: number;
  name: string;
  subjects?: Subject[];
}


export interface Subject {
  id: number;
  name: string;
  seriesId?: number | null;
  series?: Series | null;
}

export interface Series {
  id: number;
  name: string;
  subjects?: Subject[];
}

export interface Topic {
  id: number;
  name: string;
  contents?: Content[];
  // topicSubjects e outros relacionamentos many-to-many não precisam estar aqui por enquanto
}

export interface Content {
  id: number;
  title: string;
  type: string;
  link: string;
  thumbnailUrl: string;
  pdfUrl?: string | null;
  topicId: number;
}

export interface Vestibular {
  id: number;
  name: string;
}

export interface VestibularContent {
  id: number;
  vestibularId: number;
  title: string;
  type?: string | null;
  link?: string | null;
  pdfUrl?: string | null;
  isShared: boolean;
  originalContentId?: number | null;
}

export interface AccessibilityCategory {
  id: number;
  name: string;
  description?: string | null;
}

export interface AccessibilityTheme {
  id: number;
  title: string;
  content?: string | null;
  accessibilityCategoryId: number;
}

// Export DTOs
export * from '../dtos';