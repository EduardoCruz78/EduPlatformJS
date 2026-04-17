import {
  FindUserRoleAuditLogsUseCase,
  FindUsersUseCase,
  UpdateUserRoleUseCase,
} from '@edu-platform/core';
import { z } from 'zod';

import { adminProcedure, router } from '@/server/trpc';

export const userRouter = router({
  find: adminProcedure.query(async ({ ctx }) => {
    const useCase = new FindUsersUseCase(ctx.userRepository);
    return useCase.execute();
  }),

  findRoleAuditLogs: adminProcedure
    .input(
      z
        .object({
          limit: z.number().int().positive().max(50).optional(),
          actorUserId: z.string().uuid().optional(),
          targetUserId: z.string().uuid().optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const useCase = new FindUserRoleAuditLogsUseCase(ctx.userRepository);
      return useCase.execute(input);
    }),

  updateRole: adminProcedure
    .input(
      z.object({
        userId: z.string().uuid(),
        role: z.enum(['USER', 'ADMIN']),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new UpdateUserRoleUseCase(ctx.userRepository);

      return useCase.execute({
        actorUserId: ctx.user.id,
        targetUserId: input.userId,
        role: input.role,
      });
    }),
});
