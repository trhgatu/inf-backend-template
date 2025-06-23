import Role, { IRole } from '@modules/role/role.model'
import { paginate } from '@common'
import { CreateRoleInput, UpdateRoleInput } from './dtos'
import type { PaginationParams, PaginationResult } from '@common'
import { getCache, setCache } from '@shared/services'

export const getAllRoles = async (
  { page, limit }: PaginationParams,
  filters: Record<string, unknown> = {},
  sort: Record<string, 1 | -1> = {}
): Promise<PaginationResult<IRole>> => {
  const finalFilters = {
    isDeleted: false,
    ...filters
  }

  const cacheKey = `roles:page=${page}:limit=${limit}:filters=${JSON.stringify(finalFilters)}:sort=${JSON.stringify(sort)}`
  const cached = await getCache<PaginationResult<IRole>>(cacheKey)
  if (cached) return cached

  const result = await paginate(
    Role,
    { page, limit },
    finalFilters,
    sort,
    [{ path: 'permissions', select: 'name' }],
  )

  await setCache(cacheKey, result)
  return result
}

export const getRoleById = (id: string) => {
  return Role.findById(id)
}

export const createRole = (payload: CreateRoleInput) => {
  return Role.create(payload)
}

export const updateRole = (id: string, payload: UpdateRoleInput) => {
  return Role.findByIdAndUpdate(id, payload, { new: true })
}

export const deleteRole = (id: string) => {
  return Role.findByIdAndDelete(id)
}
