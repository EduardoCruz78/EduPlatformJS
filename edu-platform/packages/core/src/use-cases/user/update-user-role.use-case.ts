import { AppError } from '../../errors/app-error.ts';
import type { UpdateUserRoleInput } from '../../dtos/index.ts';
import type { IUserRepository } from '../../repositories/IUserRepository.ts';

export class UpdateUserRoleUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: UpdateUserRoleInput) {
    const actorUserId = input.actorUserId.trim();
    const targetUserId = input.targetUserId.trim();
    const role = input.role;

    if (!actorUserId || !targetUserId) {
      throw AppError.validation('Usuarios invalidos para atualizar papel.');
    }

    if (role !== 'ADMIN' && role !== 'USER') {
      throw AppError.validation('Papel de usuario invalido.');
    }

    const [actor, target] = await Promise.all([
      this.userRepository.findById(actorUserId),
      this.userRepository.findById(targetUserId),
    ]);

    if (!actor) {
      throw AppError.unauthorized('Usuario autenticado nao encontrado.');
    }

    if (actor.role !== 'ADMIN') {
      throw AppError.forbidden('Apenas administradores podem alterar papeis.');
    }

    if (!target) {
      throw AppError.notFound('Usuario alvo nao encontrado.');
    }

    if (actor.id === target.id && target.role === 'ADMIN' && role === 'USER') {
      throw AppError.forbidden('Um administrador nao pode remover o proprio acesso.');
    }

    if (target.role === 'ADMIN' && role === 'USER') {
      const adminCount = await this.userRepository.countByRole('ADMIN');

      if (adminCount <= 1) {
        throw AppError.forbidden('Nao e permitido remover o ultimo administrador.');
      }
    }

    if (target.role === role) {
      return target;
    }

    return this.userRepository.updateRoleWithAudit({
      actorUserId,
      targetUserId: target.id,
      previousRole: target.role,
      newRole: role,
    });
  }
}
