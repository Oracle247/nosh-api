"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = exports.AuthRoute = exports.UserRoute = exports.IndexRoute = void 0;
var IndexRoute_1 = require("./IndexRoute");
Object.defineProperty(exports, "IndexRoute", { enumerable: true, get: function () { return IndexRoute_1.IndexRoute; } });
var routes_1 = require("../../modules/user/routes");
Object.defineProperty(exports, "UserRoute", { enumerable: true, get: function () { return routes_1.UserRoute; } });
var routes_2 = require("../../modules/auth/routes");
Object.defineProperty(exports, "AuthRoute", { enumerable: true, get: function () { return routes_2.AuthRoute; } });
var routes_3 = require("../../modules/products/routes");
Object.defineProperty(exports, "ProductRoute", { enumerable: true, get: function () { return routes_3.ProductRoute; } });
//# sourceMappingURL=index.js.map