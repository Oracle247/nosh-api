"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compression_1 = tslib_1.__importDefault(require("compression"));
const http_1 = tslib_1.__importDefault(require("http"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const path_1 = tslib_1.__importDefault(require("path"));
const socket = require('socket.io');
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const config_1 = require("./config");
const express_handlebars_1 = require("express-handlebars");
const utils_1 = require("./core/utils");
const ErrorMiddleware_1 = require("./core/middlewares/ErrorMiddleware");
const handlebars_1 = tslib_1.__importDefault(require("handlebars"));
class App {
    // public io: SocketIO.Server
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = 'production';
        config_1.NODE_ENV || 'development';
        this.port = config_1.PORT || 3000;
        this.connectDatabase();
        // this.initSocket()
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        this.handleViews();
    }
    listen() {
        utils_1.logger.info('Starting Server ....');
        const server = this.createServer();
        // const io = socket(server, {
        //   cors: {
        //     origin: "*",
        //     // methods: ["GET", "POST"]
        //   },
        // });
        server.setTimeout(500000);
        // global.io = io; // Make the io instance globally accessible
        // const chatService = new ChatSocketService(io);
        // logger.info('========================== Connecting socket ================================');
        // io.on('connection', (socket) => {
        //   logger.info('========================== socket io connected! ================================');
        //   chatService.setupChatListeners(socket);
        //   // You can set up additional socket event listeners here, e.g., for progress updates
        //   socket.on('disconnect', () => {
        //     logger.info('Client disconnected');
        //   });
        // });
        server.listen(this.port, () => {
            utils_1.logger.info(`=================================`);
            utils_1.logger.info(`========= SERVER 🚀=======`);
            utils_1.logger.info(`========= ENV: ${this.env} ========`);
            utils_1.logger.info(`========= PORT: ${this.port} ========`);
            utils_1.logger.info(`🚀 Server running on  ${config_1.HOST}:${this.port} 🚀`);
            utils_1.logger.info(`=================================`);
        });
        return server;
    }
    handleViews() {
        // Set Handlebars as the view engine
        this.app.engine('handlebars', (0, express_handlebars_1.engine)());
        this.app.set('view engine', 'handlebars');
        this.app.set('views', './views'); // Folder where your views will be stored
        handlebars_1.default === null || handlebars_1.default === void 0 ? void 0 : handlebars_1.default.registerHelper('ifEquals', function (arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        });
    }
    createServer() {
        return http_1.default.createServer(this.app);
    }
    getServer() {
        return this.app;
    }
    async connectDatabase() {
        // if (this.env !== 'production') {
        //   set('debug', true);
        // }
        // return new Promise((resolve, reject) => {
        //   connect(
        //     dbConnection.url,
        //     dbConnection.options as ConnectOptions,
        //     (error: NativeError) => {
        //       if (error) {
        //         logger.error(`Database Error: ${error}`)
        //         reject(error)
        //       } else {
        //         logger.info(`=================================`);
        //         logger.info(`========= DATABASE 🚀=======`);
        //         logger.info(`🚀 Database running on ${DB_URI} 🚀`);
        //         logger.info(`=================================`);
        //         resolve(undefined)
        //       }
        //     },
        //   )
        // })
        //implemnt prisma db connection
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT, { stream: utils_1.stream }));
        this.app.use((0, cors_1.default)({ origin: '*' }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json({ limit: "15mb" }));
        this.app.use(express_1.default.urlencoded({ limit: "15mb", extended: true }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        utils_1.logger.info('Initializing Routes ....');
        routes.forEach(route => {
            this.app.use('/api/v1', route.router);
        });
        utils_1.logger.info('Routes Initialized Successfully ✔️');
    }
    stopServer() {
        utils_1.logger.info('Stopping HTTP Server ❌');
        return new Promise((resolve, reject) => {
            this.listen().close(error => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(undefined);
                }
            });
        });
    }
    initializeErrorHandling() {
        utils_1.logger.info('Initializing Error Handler ....');
        this.app.use(ErrorMiddleware_1.globalErrorHandler);
        (0, utils_1.registerShutdownHandler)(this.stopServer);
        utils_1.logger.info('Error Handler Initialized Successfully ✔️');
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map