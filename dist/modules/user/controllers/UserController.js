"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_codes_1 = require("http-status-codes");
const services_1 = require("../services");
const responses_utils_1 = require("../../../core/utils/responses.utils");
class UserController {
    constructor() {
        this.userService = new services_1.UserService();
    }
    // async createUser(req: Request, res: Response, next: NextFunction) {
    //   try {
    //     const { email, password, role } = req.body;
    //     const newUser = await this.userService.createUser(email, password, role as Role);
    //     successResponse(res, "User created successfully", StatusCodes.CREATED, newUser);
    //   } catch (err) {
    //     next(err);
    //   }
    // }
    async getAllUsers(req, res, next) {
        try {
            const users = await this.userService.getAllUsers();
            (0, responses_utils_1.successResponse)(res, "Users fetched successfully", http_status_codes_1.StatusCodes.OK, users);
        }
        catch (err) {
            next(err);
        }
    }
    async getUserById(req, res, next) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user)
                return next(new Error("User not found"));
            (0, responses_utils_1.successResponse)(res, "User fetched successfully", http_status_codes_1.StatusCodes.OK, user);
        }
        catch (err) {
            next(err);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const deletedUser = await this.userService.deleteUser(req.params.id);
            (0, responses_utils_1.successResponse)(res, "User deleted successfully", http_status_codes_1.StatusCodes.OK, deletedUser);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map