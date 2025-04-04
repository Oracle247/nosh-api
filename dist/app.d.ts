import http, { Server } from "http";
import express from 'express';
import { Routes } from './core/routes/interfaces/RouteInterface';
declare global {
    namespace NodeJS {
        interface Global {
            io: Server<any>;
        }
    }
}
declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    io: any;
    constructor(routes: Routes[]);
    listen(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    handleViews(): void;
    createServer(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    getServer(): express.Application;
    private connectDatabase;
    private initializeMiddlewares;
    private initializeRoutes;
    private stopServer;
    private initializeErrorHandling;
}
export default App;
