import { z } from 'zod'

export const CreateRoleSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
})

export interface CreateRoleInput {
  name: string
  description?: string
}
