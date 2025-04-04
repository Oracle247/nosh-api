"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
class UserRoute {
    constructor() {
        this.path = '/user';
        this.router = (0, express_1.Router)();
        this.userController = new controllers_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.all(`${this.path}*`, (req, res, next) => {
            next();
        });
        this.router.get(`${this.path}`, this.userController.getAllUsers);
        this.router.get(`${this.path}/:id`, this.userController.getUserById);
        // this.router.post(`${this.path}/`, this.userController.createUser);
        // this.router.put(`${this.path}/:id`, this.userController.updateUser);
        this.router.delete(`${this.path}/:id`, this.userController.deleteUser);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=UserRoute.js.map