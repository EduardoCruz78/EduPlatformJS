import type {
    AccessibilityCategory,
    AccessibilityTheme,
} from '../entities';

export interface IAccessibilityRepository {
    getCategories(): Promise<AccessibilityCategory[]>;
    findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]>;
}