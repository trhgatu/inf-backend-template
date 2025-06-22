import { Request, Response, NextFunction } from 'express'
import * as userService from './user.service'
import { sendResponse } from '@common'
import { getUserId } from '@common'


export const getMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req)
    const data = await userService.getMe(userId)
    sendResponse({ res, message: 'Get current user', data })
  } catch (err) {
    next(err)
  }
}

export const updateMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req)
    const data = await userService.updateMe(userId, req.body)
    sendResponse({ res, message: 'Profile updated', data })
  } catch (err) {
    next(err)
  }
}

export const getAllUsers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.getAllUsers()
    sendResponse({ res, message: 'All users fetched', data })
  } catch (err) {
    next(err)
  }
}
