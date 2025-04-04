import { Role } from "@prisma/client";
export declare class AuthService {
    private userService;
    register(email: string, password: string, role: Role): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(email: string, password: string): Promise<string>;
}
