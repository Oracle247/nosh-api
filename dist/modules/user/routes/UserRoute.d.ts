import { UserController } from '../controllers';
import { Routes } from "../../../core/routes/interfaces";
declare class UserRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    userController: UserController;
    constructor();
    private initializeRoutes;
}
export { UserRoute };
