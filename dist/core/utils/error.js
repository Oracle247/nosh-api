"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerShutdownHandler = registerShutdownHandler;
const logger_1 = require("./logger");
const shutdownHandler = [];
function registerShutdownHandler(handler) {
    shutdownHandler.push(handler);
}
async function gracefulShutdown() {
    const promises = [];
    for (const handler of shutdownHandler) {
        promises.push(handler());
    }
    await Promise.all(promises);
    process.exit(0);
}
function uncaughtExceptionHandler(error) {
    logger_1.logger.error('uncaughtException', error);
    process.exit(1);
}
function unhandledRejectionHandler(reason) {
    logger_1.logger.error('unhandledRejection: ', reason);
    if (reason instanceof Error) {
        logger_1.logger.error(reason.stack);
    }
    process.exit(1);
}
process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
process.on('SIGTERM', () => {
    logger_1.logger.info('SIGTERM signal received: closing HTTP server');
    gracefulShutdown();
});
process.on('SIGINT', () => {
    logger_1.logger.info('SIGINT signal received: closing HTTP server');
    gracefulShutdown();
});
process.on('SIGQUIT', () => {
    logger_1.logger.info('SIGQUIT signal received: closing HTTP server');
    gracefulShutdown();
});
//# sourceMappingURL=error.js.map