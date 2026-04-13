// packages/core/src/repositories/IContentRepository.ts
export interface IContentRepository {
  findById(id: number): Promise<any | null>;
  getByTopic(topicId: number): Promise<any[]>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
  countByTopicId(topicId: number): Promise<number>;
}