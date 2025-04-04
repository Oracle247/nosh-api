import { Request, Response, NextFunction } from "express";
export declare class ProductController {
    private productService;
    createProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    getProductById(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
}
