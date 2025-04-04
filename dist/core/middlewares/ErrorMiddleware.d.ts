import { Request, Response, NextFunction } from 'express';
import { AppError } from '../exceptions';
export declare function globalErrorHandler(err: AppError, req: Request, res: Response, next: NextFunction): void;
