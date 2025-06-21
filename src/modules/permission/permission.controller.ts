import { Request, Response, NextFunction } from 'express'
import * as permissionService from './permission.service'
import { sendResponse } from '@common'
import { AppError } from '@common'

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await permissionService.getAllPermissions()
    sendResponse({ res, message: 'Permissions fetched', data })
  } catch (err) {
    next(err)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await permissionService.getPermissionById(req.params.id)
    if (!data) throw new AppError('Permission not found', 404)
    sendResponse({ res, message: 'Permission found', data })
  } catch (err) {
    next(err)
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await permissionService.createPermission(req.body)
    sendResponse({ res, message: 'Permission created', statusCode: 201, data })
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await permissionService.updatePermission(req.params.id, req.body)
    if (!data) throw new AppError('Permission not found', 404)
    sendResponse({ res, message: 'Permission updated', data })
  } catch (err) {
    next(err)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await permissionService.deletePermission(req.params.id)
    if (!data) throw new AppError('Permission not found', 404)
    sendResponse({ res, message: 'Permission deleted', data })
  } catch (err) {
    next(err)
  }
}
