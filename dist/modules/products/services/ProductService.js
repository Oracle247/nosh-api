"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const client_1 = require("@prisma/client");
const helper_1 = require("../../../core/utils/helper");
const prisma = new client_1.PrismaClient();
class ProductService {
    async createProduct(data) {
        return prisma.product.create({
            data: Object.assign(Object.assign({}, data), { modifierGroups: {
                    create: data.modifierGroups.map((group) => ({
                        name: group.name,
                        isRequired: group.isRequired,
                        maxSelections: group.maxSelections,
                        modifiers: {
                            create: group.modifiers.map((modifier) => ({
                                name: modifier.name,
                                priceAdjustment: modifier.priceAdjustment,
                            })),
                        },
                    })),
                } }),
            include: {
                modifierGroups: {
                    include: {
                        modifiers: true,
                    },
                },
            },
        });
    }
    async getAllProducts() {
        return prisma.product.findMany({
            include: {
                modifierGroups: {
                    include: {
                        modifiers: true,
                    },
                },
            },
        });
    }
    async getProductById(id) {
        return prisma.product.findUnique({
            where: { id },
            include: {
                modifierGroups: {
                    include: {
                        modifiers: true,
                    },
                },
            },
        });
    }
    async updateProduct(id, data) {
        return prisma.product.update({
            where: { id },
            data: {
                name: data.name,
                price: data.price,
                image: data.image,
                modifierGroups: data.modifierGroups
                    ? {
                        upsert: data.modifierGroups.map((group) => (0, helper_1.upsertModifierGroup)(id, group)),
                    }
                    : undefined,
            },
            include: {
                modifierGroups: {
                    include: {
                        modifiers: true,
                    },
                },
            },
        });
    }
    async deleteProduct(id) {
        return prisma.product.delete({ where: { id } });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map