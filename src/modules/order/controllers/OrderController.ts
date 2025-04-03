import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services";
import { StatusCodes } from "http-status-codes";
import { successResponse } from "../../../core/utils/responses.utils";

export class ProductController {
  private productService = new ProductService();

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.productService.createProduct({ ...req.body });
      successResponse(res, "Product created successfully", StatusCodes.CREATED, result);
    } catch (err) {
      next(err);
    }
  }

  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.productService.getAllProducts();
      successResponse(res, "Products fetched successfully", StatusCodes.OK, result);
    } catch (err) {
      next(err);
    }
  }

  async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.productService.getProductById(id);
      successResponse(res, "Product fetched successfully", StatusCodes.OK, result);
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await this.productService.updateProduct(id, data);
      successResponse(res, "Product updated successfully", StatusCodes.OK, result);
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.productService.deleteProduct(id);
      successResponse(res, "Product deleted successfully", StatusCodes.OK, result);
    } catch (err) {
      next(err);
    }
  }
}
