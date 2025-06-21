import Role from '@modules/role/role.model'
import { CreateRoleInput, UpdateRoleInput } from './dtos'

export const getAllRoles = () => {
  return Role.find()
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
