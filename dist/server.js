"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const routes_1 = require("./core/routes");
const validateEnv_1 = require("./core/utils/validateEnv");
(0, validateEnv_1.validateEnv)();
const app = new app_1.default([
    new routes_1.UserRoute(),
    new routes_1.AuthRoute(),
    new routes_1.ProductRoute(),
    new routes_1.IndexRoute()
]);
app.listen();
//# sourceMappingURL=server.js.map