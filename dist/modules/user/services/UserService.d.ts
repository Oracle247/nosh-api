import { Role } from "@prisma/client";
import { IUser } from "../models/UserModel";
export declare class UserService {
    createUser(email: string, password: string, role: Role): Promise<IUser>;
    getUserById(id: string): Promise<IUser | null>;
    getUserByEmail(email: string): Promise<IUser | null>;
    getAllUsers(): Promise<IUser[]>;
    updateUser(id: string, data: Partial<IUser>): Promise<IUser>;
    deleteUser(id: string): Promise<IUser>;
}
