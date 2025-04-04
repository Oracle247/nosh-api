"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableTwoFactorAuth = enableTwoFactorAuth;
exports.verifyTwoFactorToken = verifyTwoFactorToken;
const tslib_1 = require("tslib");
// src/utils/twoFactorAuth.ts
const speakeasy = tslib_1.__importStar(require("speakeasy"));
const qrcode = tslib_1.__importStar(require("qrcode"));
async function enableTwoFactorAuth(email) {
    const secret = speakeasy.generateSecret({ name: `Statement AI: (${email})` });
    const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
    return { secret: secret.base32, qrCodeUrl };
}
function verifyTwoFactorToken(secret, token) {
    return speakeasy.totp.verify({ secret, encoding: 'base32', token });
}
//# sourceMappingURL=twoFactorAuth.js.map