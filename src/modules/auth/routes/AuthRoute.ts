
import { Request, Response, NextFunction, Router } from 'express';
import { AuthController } from '../controllers';
import { Routes } from "../../../core/routes/interfaces";

class AuthRoute implements Routes {
    public path = '/auth';
    public router = Router();
    public userController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.all(`${this.path}*`, (req: Request, res: Response, next: NextFunction) => {
            next()
        })

        this.router.post(`${this.path}/register`, this.userController.register);
        this.router.post(`${this.path}/login`, this.userController.login);
    }
}

export { AuthRoute };

