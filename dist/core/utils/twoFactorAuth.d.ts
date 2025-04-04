export declare function enableTwoFactorAuth(email: string): Promise<{
    secret: any;
    qrCodeUrl: any;
}>;
export declare function verifyTwoFactorToken(secret: string, token: string): any;
