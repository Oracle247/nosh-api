"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
const tslib_1 = require("tslib");
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
    sendHttpError() {
        return (0, http_errors_1.default)(this.status, this.message);
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=HttpException.js.map