import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, [], error.stack);
  }

  const apiError = error as ApiError;

  logger.error(`Error: ${apiError.message}`, {
    statusCode: apiError.statusCode,
    errors: apiError.errors,
    stack: apiError.stack,
  });

  res.status(apiError.statusCode).json({
    success: false,
    message: apiError.message,
    errors: apiError.errors,
    ...(process.env.NODE_ENV === 'development' && { stack: apiError.stack }),
  });
};
