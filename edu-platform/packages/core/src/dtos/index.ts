// packages/core/src/dtos/index.ts

import { z } from 'zod';

export const CreateUserInputSchema = z.object({
  providerId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(['USER', 'ADMIN']).optional(),
});

export const UpdateUserRoleInputSchema = z.object({
  actorUserId: z.string().uuid(),
  targetUserId: z.string().uuid(),
  role: z.enum(['USER', 'ADMIN']),
});

export const UpdateUserRoleWithAuditInputSchema = z.object({
  actorUserId: z.string().uuid(),
  targetUserId: z.string().uuid(),
  previousRole: z.enum(['USER', 'ADMIN']),
  newRole: z.enum(['USER', 'ADMIN']),
});

export const FindUserRoleAuditLogsInputSchema = z.object({
  limit: z.number().int().positive().max(50).optional(),
  actorUserId: z.string().uuid().optional(),
  targetUserId: z.string().uuid().optional(),
});

export const CreateChecklistInputSchema = z.object({
  userId: z.string().trim().min(1),
  contentId: z.number().int().positive(),
});

export const FindContentsByTopicInputSchema = z.object({
  topicId: z.number().int().positive(),
});

export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;
export type UpdateUserRoleInput = z.infer<typeof UpdateUserRoleInputSchema>;
export type UpdateUserRoleWithAuditInput = z.infer<typeof UpdateUserRoleWithAuditInputSchema>;
export type FindUserRoleAuditLogsInput = z.infer<typeof FindUserRoleAuditLogsInputSchema>;
export type CreateChecklistInput = z.infer<typeof CreateChecklistInputSchema>;
export type FindContentsByTopicInput = z.infer<typeof FindContentsByTopicInputSchema>;

export * from './admin.dto';
export * from './response.dto';
