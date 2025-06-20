// src/core/middleware/requireAuth.ts
import { Request, Response, NextFunction } from 'express'
import { verifyAccessToken } from '@common/jwt'
import { AppError } from '@common'

export const requireAuth = (req: Request, _: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer '))
      throw new AppError('Missing authorization header', 401)

    const token = authHeader.split(' ')[1]
    const decoded = verifyAccessToken(token)

    if (!decoded || typeof decoded !== 'object' || !decoded._id) {
      throw new AppError('Invalid token payload', 401)
    }

    req.user = {
      _id: decoded._id,
      roleId: decoded.roleId,
      email: decoded.email,
      fullName: decoded.fullName,
      status: decoded.status,
    }

    next()
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      return next(new AppError('Token expired', 401))
    }
    if (err.name === 'JsonWebTokenError') {
      return next(new AppError('Invalid token', 401))
    }

    next(new AppError('Authentication failed', 401, true, err))
  }
}
