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

export const FindContentsByTopicInputSchema = z.object({
  topicId: z.number(),
});

export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;
export type CreateChecklistInput = z.infer<typeof CreateChecklistInputSchema>;
export type FindContentsByTopicInput = z.infer<typeof FindContentsByTopicInputSchema>;

export * from './admin.dto';
export * from './response.dto';
