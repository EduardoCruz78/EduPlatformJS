// packages/core/src/dtos/admin.dto.ts (Crie este arquivo e exporte no index.ts do dtos)

// --- SERIES ---
export interface CreateSeriesInput {
  name: string;
}
export interface UpdateSeriesInput {
  id: number;
  name: string;
}

// --- SUBJECT ---
export interface CreateSubjectInput {
  name: string;
  seriesId: number;
}
export interface UpdateSubjectInput {
  id: number;
  name?: string;
  seriesId?: number;
}

// --- TOPIC ---
export interface CreateTopicInput {
  name: string;
  subjectIds: number[];
}
export interface UpdateTopicInput {
  id: number;
  name?: string;
  subjectIds?: number[];
}

// --- CONTENT ---
export interface CreateContentInput {
  title: string;
  type: string;
  link: string;
  thumbnailUrl: string;
  pdfUrl?: string | null;
  topicId: number;
}
export interface UpdateContentInput {
  id: number;
  title?: string;
  type?: string;
  link?: string;
  thumbnailUrl?: string;
  pdfUrl?: string | null;
  topicId?: number;
}