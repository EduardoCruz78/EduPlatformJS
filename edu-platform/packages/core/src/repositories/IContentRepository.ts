// packages/core/src/repositories/IContentRepository.ts
export interface IContentRepository {
  findById(id: number): Promise<any | null>;
  getByTopic(topicId: number): Promise<any[]>;
  countByTopicId(topicId: number): Promise<number>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
}