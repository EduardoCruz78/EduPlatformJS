// packages/core/src/repositories/IUserRepository.ts
export interface IUserRepository {
  findByEmail(email: string): Promise<any | null>;
  findById(id: string): Promise<any | null>;
  create(data: {
    email: string;
    name: string;
    providerId: string;
  }): Promise<any>;
  update(id: string, data: any): Promise<any>;
}