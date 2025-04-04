import { Response } from "express";
export declare const successResponse: (res: Response, message: string, statusCode?: number, data?: any) => Response<any, Record<string, any>>;
export declare const errorResponse: (res: Response, message?: string, statusCode?: number, error?: any) => Response<any, Record<string, any>>;
