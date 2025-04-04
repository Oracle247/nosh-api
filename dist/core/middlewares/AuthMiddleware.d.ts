import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
export declare function authenticate(req: Request, res: Response, next: NextFunction): void;
export declare function authorize(roles: Role[]): (req: Request, res: Response, next: NextFunction) => void;
