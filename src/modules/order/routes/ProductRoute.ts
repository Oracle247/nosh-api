
import { Request, Response, NextFunction, Router } from 'express';
import { ProductController } from '../controllers';
import { Routes } from "../../../core/routes/interfaces";
import { authenticate, authorize } from '../../../core/middlewares/AuthMiddleware';
import { Role } from '@prisma/client';

class ProductRoute implements Routes {
  public path = '/product';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.all(`${this.path}*`, (req: Request, res: Response, next: NextFunction) => {
      next()
    })

    this.router.get(`${this.path}`, authenticate, authorize([Role.ADMIN]), this.productController.getAllProducts);

    this.router.get(`${this.path}/:id`, authenticate, this.productController.getProductById);

    this.router.post(`${this.path}/`, authenticate, this.productController.createProduct);

    this.router.put(`${this.path}/:id`, authenticate, authorize([Role.ADMIN]), this.productController.updateProduct);

    this.router.delete(`${this.path}/:id`, authenticate, authorize([Role.ADMIN]), this.productController.deleteProduct);
  }
}

export { ProductRoute };

