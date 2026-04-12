// packages/core/src/repositories/IChecklistRepository.ts
export interface IChecklistRepository {
  findByUserId(userId: string): Promise<any[]>;
  findById(id: string): Promise<any | null>;
  findByContentId(contentId: number): Promise<any[]>;
  create(data: any): Promise<any>;
  delete(id: string): Promise<void>;
}