import type { ErrorRequestHandler } from 'express';
import { AppError } from '@common/app-error';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const env = process.env.NODE_ENV || 'development';

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors: any[] = [];

  if (err instanceof AppError) {
    const errorResponse: Record<string, any> = {
      success: false,
      message: err.message,
    };

    if (env !== 'production' && err.stack) errorResponse.stack = err.stack;
    if (err.cause) errorResponse.error = err.cause;

    res.status(statusCode).json(errorResponse);
    return;
  }

  if (err instanceof ZodError) {
    message = 'Validation error';
    statusCode = 400;
    errors = err.errors.map((e) => ({
      path: e.path.join('.'),
      message: e.message,
    }));
  }

  if (err.name === 'ValidationError') {
    message = 'Mongoose validation error';
    errors = Object.values(err.errors).map((e: any) => ({
      path: e.path,
      message: e.message,
    }));
  }

  if (err.code === 11000) {
    message = 'Duplicate key error';
    errors = Object.keys(err.keyValue).map((key) => ({
      path: key,
      message: `${key} must be unique`,
    }));
  }

  const responsePayload: Record<string, any> = {
    success: false,
    message,
  };

  if (errors.length) responsePayload.errors = errors;
  if (env !== 'production') responsePayload.stack = err.stack;

  res.status(statusCode).json(responsePayload);
};
