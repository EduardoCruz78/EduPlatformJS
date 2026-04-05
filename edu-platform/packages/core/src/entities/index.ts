// packages/core/src/entities/index.ts

// User
export interface User {
  id: string
  providerId: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserInput {
  providerId: string
  name: string
  email: string
}

// Checklist
export interface Checklist {
  id: number
  userId: string
  contentId: number
  createdAt: Date
}

// Series, Subject, Topic, Content
export interface Series {
  id: number
  name: string
  subjects?: Subject[]
}

export interface Subject {
  id: number
  name: string
  seriesId?: number
  series?: Series
}

export interface Topic {
  id: number
  name: string
  contents?: Content[]
}

export interface Content {
  id: number
  title: string
  type: string
  link: string
  thumbnailUrl: string
  pdfUrl?: string | null
  topicId: number
}

// Vestibular
export interface Vestibular {
  id: number
  name: string
}

export interface VestibularContent {
  id: number
  vestibularId: number
  title: string
  type?: string
  link?: string
  pdfUrl?: string
  isShared: boolean
  originalContentId?: number
}

// Accessibility
export interface AccessibilityCategory {
  id: number
  name: string
  description?: string
}

export interface AccessibilityTheme {
  id: number
  title: string
  content?: string
  accessibilityCategoryId: number
}

// Export all
export * from './dtos' // vamos criar depois
// packages/core/src/dtos/index.ts
export {} // arquivo vazio por enquanto