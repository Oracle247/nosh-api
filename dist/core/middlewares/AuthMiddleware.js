"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.authorize = authorize;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
function authenticate(req, res, next) {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = { id: decoded.userId, role: decoded.role };
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
function authorize(roles) {
    return (req, res, next) => {
        try {
            if (!req.user || !roles.includes(req.user.role)) {
                res.status(403).json({ message: "Forbidden" });
                return;
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=AuthMiddleware.js.map