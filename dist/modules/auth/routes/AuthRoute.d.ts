import { AuthController } from '../controllers';
import { Routes } from "../../../core/routes/interfaces";
declare class AuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    userController: AuthController;
    constructor();
    private initializeRoutes;
}
export { AuthRoute };
