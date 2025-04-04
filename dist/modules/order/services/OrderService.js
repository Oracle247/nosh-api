"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class OrderService {
    async createOrder(data) {
        return prisma.order.create({
            data: {
                totalPrice: data.totalPrice,
                status: data.status || "pending",
                orderItems: {
                    create: data.orderItems.map((item) => {
                        var _a;
                        return ({
                            productItemId: item.productItemId,
                            quantity: item.quantity,
                            price: undefined,
                            orderItemModifiers: {
                                create: ((_a = item.modifiers) === null || _a === void 0 ? void 0 : _a.map((mod) => ({
                                    modifierId: mod.modifierId,
                                    price: mod.price,
                                }))) || [],
                            },
                        });
                    }),
                },
            },
            include: {
                orderItems: {
                    include: {
                        product: true,
                        orderItemModifiers: {
                            include: {
                                modifier: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getAllOrders() {
        return prisma.order.findMany({
            include: {
                orderItems: {
                    include: {
                        product: true,
                        orderItemModifiers: {
                            include: {
                                modifier: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getOrderById(id) {
        return prisma.order.findUnique({
            where: { id },
            include: {
                orderItems: {
                    include: {
                        product: true,
                        orderItemModifiers: {
                            include: {
                                modifier: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async updateOrder(id, data) {
        // return prisma.order.update({
        //   where: { id },
        //   data: {
        //     totalPrice: data.totalPrice,
        //     status: data.status,
        //     orderItems: {
        //       upsert: data.orderItems?.map((item) => ({
        //         where: { id: item.id || 'INVALID_ID' }, // Ensure valid ID or use a placeholder
        //         update: formatOrderItemUpdate(item),
        //         create: formatOrderItemCreate(item, id),
        //       })) || [],
        //     },
        //   },
        //   include: {
        //     orderItems: {
        //       include: {
        //         product: true,
        //         orderItemModifiers: {
        //           include: { modifier: true },
        //         },
        //       },
        //     },
        //   },
        // });
        return {};
    }
    async deleteOrder(id) {
        return prisma.order.delete({
            where: { id },
        });
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map