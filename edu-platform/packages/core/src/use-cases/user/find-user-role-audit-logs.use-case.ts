import type { FindUserRoleAuditLogsInput } from '../../dtos/index.ts';
import type { IUserRepository } from '../../repositories/IUserRepository.ts';

export class FindUserRoleAuditLogsUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: FindUserRoleAuditLogsInput = {}) {
    return this.userRepository.findRoleAuditLogs(input);
  }
}
