import { Request, Response, NextFunction } from 'express'
import * as roleService from './role.service'
import { sendResponse } from '@common'
import { AppError } from '@common'

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await roleService.getAllRoles()
    sendResponse({ res, message: 'Roles fetched', data })
  } catch (err) {
    next(err)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await roleService.getRoleById(req.params.id)
    if (!role) throw new AppError('Role not found', 404)
    sendResponse({ res, message: 'Role found', data: role })
  } catch (err) {
    next(err)
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await roleService.createRole(req.body)
    sendResponse({ res, message: 'Role created', statusCode: 201, data: role })
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await roleService.updateRole(req.params.id, req.body)
    if (!role) throw new AppError('Role not found', 404)
    sendResponse({ res, message: 'Role updated', data: role })
  } catch (err) {
    next(err)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await roleService.deleteRole(req.params.id)
    if (!role) throw new AppError('Role not found', 404)
    sendResponse({ res, message: 'Role deleted', data: role })
  } catch (err) {
    next(err)
  }
}
