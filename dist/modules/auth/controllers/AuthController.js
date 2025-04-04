"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_codes_1 = require("http-status-codes");
const services_1 = require("../services");
const responses_utils_1 = require("../../../core/utils/responses.utils");
class AuthController {
    constructor() {
        this.authService = new services_1.AuthService();
    }
    async register(req, res, next) {
        try {
            const { email, password, role } = req.body;
            const result = await this.authService.register(email, password, role);
            (0, responses_utils_1.successResponse)(res, "User registered successfully", http_status_codes_1.StatusCodes.CREATED, result);
        }
        catch (err) {
            next(err);
        }
    }
    async login(req, res, next) {
        try {
            const token = await this.authService.login(req.body.email, req.body.password);
            (0, responses_utils_1.successResponse)(res, "Login successful", http_status_codes_1.StatusCodes.OK, { token });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map