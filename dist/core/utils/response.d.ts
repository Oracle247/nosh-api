import { Response } from "express";
declare const sendResponse: (res: Response, statusCode: number, msg: any, data?: any) => Response<any, Record<string, any>>;
export { sendResponse };
