"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const tslib_1 = require("tslib");
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
class AppError extends Error {
    constructor(message, statusCode, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational; // Identifies whether the error is operational (vs. programming errors)
        Error.captureStackTrace(this, this.constructor);
    }
    /**
     * Creates an HTTP-specific error using `http-errors` library
     * while allowing for custom messages.
     */
    static httpError(statusCode, message) {
        const error = (0, http_errors_1.default)(statusCode, message);
        return new AppError(error.message, error.statusCode, true);
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map