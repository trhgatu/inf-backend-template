import Permission from './permission.model'
import { CreatePermissionInput, UpdatePermissionInput } from './dtos'

export const getAllPermissions = async () => {
  return Permission.find()
}

export const getPermissionById = async (id: string) => {
  return Permission.findById(id)
}

export const createPermission = async (payload: CreatePermissionInput) => {
  return Permission.create(payload)
}

export const updatePermission = async (id: string, payload: UpdatePermissionInput) => {
  return Permission.findByIdAndUpdate(id, payload, { new: true })
}

export const deletePermission = async (id: string) => {
  return Permission.findByIdAndDelete(id)
}
