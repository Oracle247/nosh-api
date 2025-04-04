"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const services_1 = require("../../user/services");
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
class AuthService {
    constructor() {
        this.userService = new services_1.UserService();
    }
    async register(email, password, role) {
        const existingUser = await this.userService.getUserByEmail(email);
        if (existingUser)
            throw new Error("User already exists");
        const newUser = await this.userService.createUser(email, password, role);
        return { id: newUser.id, email: newUser.email, role: newUser.role };
    }
    async login(email, password) {
        const user = await this.userService.getUserByEmail(email);
        if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
            throw new Error("Invalid email or password");
        }
        return jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map