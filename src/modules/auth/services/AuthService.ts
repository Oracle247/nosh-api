import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserService } from "../../user/services";
import { Role } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export class AuthService {
    private userService = new UserService();

    async register(email: string, password: string, role: Role) {
        const existingUser = await this.userService.getUserByEmail(email);
        if (existingUser) throw new Error("User already exists");

        const newUser = await this.userService.createUser(email, password, role);
        return { id: newUser.id, email: newUser.email, role: newUser.role };
    }

    async login(email: string, password: string) {
        const user = await this.userService.getUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid email or password");
        }
        return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    }
}
