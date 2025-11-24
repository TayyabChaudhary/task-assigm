import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { ApiResponse } from '../utils/ApiResponse';
import { pool } from '../config/database';

export const getHealth = asyncHandler(async (req: Request, res: Response) => {
  const healthData = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  };

  res.status(200).json(new ApiResponse(200, healthData, 'Server is healthy'));
});

export const getDatabaseHealth = asyncHandler(
  async (req: Request, res: Response) => {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();

    const dbHealth = {
      status: 'Connected',
      timestamp: result.rows[0].now,
      database: process.env.DB_NAME,
    };

    res
      .status(200)
      .json(new ApiResponse(200, dbHealth, 'Database is healthy'));
  }
);
