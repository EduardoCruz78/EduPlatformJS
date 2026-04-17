import type { IUserRepository } from '../../repositories/IUserRepository.ts';

export class FindUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute() {
    return this.userRepository.find();
  }
}
