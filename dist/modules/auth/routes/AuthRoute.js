"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
class AuthRoute {
    constructor() {
        this.path = '/auth';
        this.router = (0, express_1.Router)();
        this.userController = new controllers_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.all(`${this.path}*`, (req, res, next) => {
            next();
        });
        this.router.post(`${this.path}/register`, this.userController.register);
        this.router.post(`${this.path}/login`, this.userController.login);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=AuthRoute.js.map