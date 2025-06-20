// src/core/middleware/error.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { sendError, AppError } from '@common'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const env = process.env.NODE_ENV || 'development'

  // Ưu tiên AppError
  if (err instanceof AppError) {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    const errors: any[] = []

    if (err.cause instanceof ZodError) {
      err.cause.errors.forEach((e) => {
        errors.push({
          path: e.path.join('.'),
          message: e.message,
        })
      })
    }

    return sendError({
      res,
      statusCode,
      message,
      errors,
      stack: env !== 'production' ? err.stack : undefined,
    })
  }

  // Zod trực tiếp
  if (err instanceof ZodError) {
    const errors = err.errors.map((e) => ({
      path: e.path.join('.'),
      message: e.message,
    }))

    return sendError({
      res,
      statusCode: 400,
      message: 'Validation error',
      errors,
      stack: env !== 'production' ? err.stack : undefined,
    })
  }

  // Mongoose validation
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e: any) => ({
      path: e.path,
      message: e.message,
    }))

    return sendError({
      res,
      statusCode: 400,
      message: 'Mongoose validation error',
      errors,
      stack: env !== 'production' ? err.stack : undefined,
    })
  }

  // Duplicate key
  if (err.code === 11000) {
    const errors = Object.keys(err.keyValue).map((key) => ({
      path: key,
      message: `${key} must be unique`,
    }))

    return sendError({
      res,
      statusCode: 400,
      message: 'Duplicate key error',
      errors,
      stack: env !== 'production' ? err.stack : undefined,
    })
  }

  // Fallback
  return sendError({
    res,
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
    errors: [],
    stack: env !== 'production' ? err.stack : undefined,
  })
}
