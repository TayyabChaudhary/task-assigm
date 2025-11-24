export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max: number;
}

export interface QueryResult<T = any> {
  rows: T[];
  rowCount: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  offset: number;
}

export interface ApiResponseData<T = any> {
  success: boolean;
  message: string;
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
