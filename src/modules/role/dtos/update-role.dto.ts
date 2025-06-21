import { z } from 'zod'

export const UpdateRoleSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
})

export interface UpdateRoleInput {
  name?: string
  description?: string
  isActive?: boolean
}
