// packages/core/src/dtos/index.ts
import { z } from 'zod';

export const CreateUserInputSchema = z.object({
  providerId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
});

export const CreateChecklistInputSchema = z.object({
  userId: z.string(),
  contentId: z.number(),
});

export const GetContentsByTopicInputSchema = z.object({
  topicId: z.number(),
});

export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;
export type CreateChecklistInput = z.infer<typeof CreateChecklistInputSchema>;
export type GetContentsByTopicInput = z.infer<typeof GetContentsByTopicInputSchema>;

// Export interfaces antigas também para compatibilidade
export { CreateUserInput as CreateUserInputLegacy } from '../entities';