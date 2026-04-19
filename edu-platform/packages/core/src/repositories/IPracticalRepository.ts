import type {
  CreatePracticalCategoryInput,
  CreatePracticalGuideInput,
  CreatePracticalGuideLinkInput,
  UpdatePracticalCategoryInput,
  UpdatePracticalGuideInput,
  UpdatePracticalGuideLinkInput,
} from '../dtos';
import type {
  PracticalCategory,
  PracticalGuide,
  PracticalGuideLink,
} from '../entities';

export interface IPracticalRepository {
  findCategories(): Promise<PracticalCategory[]>;
  findPublicCategories(): Promise<PracticalCategory[]>;
  findCategoryById(id: number): Promise<PracticalCategory | null>;
  findCategoryBySlug(slug: string): Promise<PracticalCategory | null>;
  findPublicCategoryBySlug(slug: string): Promise<PracticalCategory | null>;
  createCategory(data: CreatePracticalCategoryInput): Promise<PracticalCategory>;
  updateCategory(
    id: number,
    data: Omit<UpdatePracticalCategoryInput, 'id'>
  ): Promise<PracticalCategory>;
  deleteCategory(id: number): Promise<void>;

  findGuideById(id: number): Promise<PracticalGuide | null>;
  findGuideBySlug(slug: string): Promise<PracticalGuide | null>;
  findPublicGuideBySlug(slug: string): Promise<PracticalGuide | null>;
  createGuide(data: CreatePracticalGuideInput): Promise<PracticalGuide>;
  updateGuide(
    id: number,
    data: Omit<UpdatePracticalGuideInput, 'id'>
  ): Promise<PracticalGuide>;
  deleteGuide(id: number): Promise<void>;

  findGuideLinkById(id: number): Promise<PracticalGuideLink | null>;
  createGuideLink(data: CreatePracticalGuideLinkInput): Promise<PracticalGuideLink>;
  updateGuideLink(
    id: number,
    data: Omit<UpdatePracticalGuideLinkInput, 'id'>
  ): Promise<PracticalGuideLink>;
  deleteGuideLink(id: number): Promise<void>;
}
