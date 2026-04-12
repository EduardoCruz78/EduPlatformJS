// packages/core/src/repositories/IContentRepository.ts
export interface IContentRepository {
  findById(id: string): Promise<any | null>;
  getByTopic(topicId: number): Promise<any[]>;
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
}