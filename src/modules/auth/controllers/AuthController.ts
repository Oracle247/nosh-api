import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthService } from "../services";
import { successResponse } from "../../../core/utils/responses.utils";

export class AuthController {
    private authService = new AuthService();

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, role } = req.body;
            const result = await this.authService.register(email, password, role);
            successResponse(res, "User registered successfully", StatusCodes.CREATED, result);
        } catch (err) {
            next(err);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const token = await this.authService.login(req.body.email, req.body.password);
            successResponse(res, "Login successful", StatusCodes.OK, { token });
        } catch (err) {
            next(err);
        }
    }
}
