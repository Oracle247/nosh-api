"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const AuthMiddleware_1 = require("../../../core/middlewares/AuthMiddleware");
const client_1 = require("@prisma/client");
class ProductRoute {
    constructor() {
        this.path = '/product';
        this.router = (0, express_1.Router)();
        this.productController = new controllers_1.ProductController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.all(`${this.path}*`, (req, res, next) => {
            next();
        });
        this.router.get(`${this.path}`, AuthMiddleware_1.authenticate, (0, AuthMiddleware_1.authorize)([client_1.Role.ADMIN]), this.productController.getAllProducts);
        this.router.get(`${this.path}/:id`, AuthMiddleware_1.authenticate, this.productController.getProductById);
        this.router.post(`${this.path}/`, AuthMiddleware_1.authenticate, this.productController.createProduct);
        this.router.put(`${this.path}/:id`, AuthMiddleware_1.authenticate, (0, AuthMiddleware_1.authorize)([client_1.Role.ADMIN]), this.productController.updateProduct);
        this.router.delete(`${this.path}/:id`, AuthMiddleware_1.authenticate, (0, AuthMiddleware_1.authorize)([client_1.Role.ADMIN]), this.productController.deleteProduct);
    }
}
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=ProductRoute.js.map