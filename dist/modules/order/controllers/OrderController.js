"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_codes_1 = require("http-status-codes");
const responses_utils_1 = require("../../../core/utils/responses.utils");
const services_1 = require("../../products/services");
class ProductController {
    constructor() {
        this.productService = new services_1.ProductService();
    }
    async createProduct(req, res, next) {
        try {
            const result = await this.productService.createProduct(Object.assign({}, req.body));
            (0, responses_utils_1.successResponse)(res, "Product created successfully", http_status_codes_1.StatusCodes.CREATED, result);
        }
        catch (err) {
            next(err);
        }
    }
    async getAllProducts(req, res, next) {
        try {
            const result = await this.productService.getAllProducts();
            (0, responses_utils_1.successResponse)(res, "Products fetched successfully", http_status_codes_1.StatusCodes.OK, result);
        }
        catch (err) {
            next(err);
        }
    }
    async getProductById(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.productService.getProductById(id);
            (0, responses_utils_1.successResponse)(res, "Product fetched successfully", http_status_codes_1.StatusCodes.OK, result);
        }
        catch (err) {
            next(err);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            const result = await this.productService.updateProduct(id, data);
            (0, responses_utils_1.successResponse)(res, "Product updated successfully", http_status_codes_1.StatusCodes.OK, result);
        }
        catch (err) {
            next(err);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.productService.deleteProduct(id);
            (0, responses_utils_1.successResponse)(res, "Product deleted successfully", http_status_codes_1.StatusCodes.OK, result);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=OrderController.js.map