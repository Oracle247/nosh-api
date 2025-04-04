import { ProductController } from '../controllers';
import { Routes } from "../../../core/routes/interfaces";
declare class ProductRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    productController: ProductController;
    constructor();
    private initializeRoutes;
}
export { ProductRoute };
