import type {
  AddAccessibilityCategoryTopicInput,
  CreateAccessibilityCategoryInput,
  CreateAccessibilityThemeInput,
} from '../dtos';
import type {
  AccessibilityCategory,
  AccessibilityTheme,
  Topic,
} from '../entities';

export interface IAccessibilityRepository {
  getCategories(): Promise<AccessibilityCategory[]>;
  findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]>;
  findTopicsByCategory(categoryId: number): Promise<Topic[]>;
  createCategory(data: CreateAccessibilityCategoryInput): Promise<AccessibilityCategory>;
  deleteCategory(id: number): Promise<void>;
  createTheme(data: CreateAccessibilityThemeInput): Promise<AccessibilityTheme>;
  deleteTheme(id: number): Promise<void>;
  addTopicToCategory(data: AddAccessibilityCategoryTopicInput): Promise<void>;
  removeTopicFromCategory(data: AddAccessibilityCategoryTopicInput): Promise<void>;
}
