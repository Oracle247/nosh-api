"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
class UserService {
    async createUser(email, password, role) {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        return prisma.user.create({
            data: { email, password: hashedPassword, role },
        });
    }
    async getUserById(id) {
        return prisma.user.findUnique({ where: { id } });
    }
    async getUserByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    }
    async getAllUsers() {
        return prisma.user.findMany();
    }
    async updateUser(id, data) {
        if (data.password) {
            data.password = await bcrypt_1.default.hash(data.password, 10);
        }
        return prisma.user.update({ where: { id }, data });
    }
    async deleteUser(id) {
        return prisma.user.delete({ where: { id } });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map