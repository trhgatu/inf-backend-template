import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500
  const env = process.env.NODE_ENV || 'development'

  let message = err.message || 'Internal Server Error'
  let errors: any = []

  // Zod validation error
  if (err instanceof ZodError) {
    message = 'Validation error'
    errors = err.errors.map((e) => ({
      path: e.path.join('.'),
      message: e.message,
    }))
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    message = 'Mongoose validation error'
    errors = Object.values(err.errors).map((e: any) => ({
      path: e.path,
      message: e.message,
    }))
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    message = 'Duplicate key error'
    errors = Object.keys(err.keyValue).map((key) => ({
      path: key,
      message: `${key} must be unique`,
    }))
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(errors.length && { errors }),
    ...(env !== 'production' && { stack: err.stack }),
  })
}
