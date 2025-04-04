import { Routes } from '../../core/routes/interfaces/RouteInterface';
declare class IndexRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    private initializeRoutes;
}
export { IndexRoute };
