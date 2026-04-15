// packages/core/src/use-cases/user/find-or-create-user.use-case.ts

import type { CreateUserInput } from '../../dtos';
import type { IUserRepository } from '../../repositories/IUserRepository';

export class FindOrCreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserInput) {
    return this.userRepository.findOrCreate(data);
  }
}