import { Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';

export const notFound = (req: Request, res: Response) => {
  throw new ApiError(404, `Route ${req.originalUrl} not found`);
};
