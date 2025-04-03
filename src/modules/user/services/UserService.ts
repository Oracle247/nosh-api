import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { IUser } from "../models/UserModel";

const prisma = new PrismaClient();

export class UserService {
  async createUser(email: string, password: string, role: Role): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: { email, password: hashedPassword, role },
    });
  }

  async getUserById(id: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async getAllUsers(): Promise<IUser[]> {
    return prisma.user.findMany();
  }

  async updateUser(id: string, data: Partial<IUser>): Promise<IUser> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<IUser> {
    return prisma.user.delete({ where: { id } });
  }
}
