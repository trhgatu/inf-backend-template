import { z } from 'zod';

export const createRoleSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export const updateRoleSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});
