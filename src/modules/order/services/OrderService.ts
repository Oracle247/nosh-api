import { PrismaClient } from "@prisma/client";
import { ICreateOrder } from "../interfaces/OrderInterface";
import { formatOrderItemCreate, formatOrderItemUpdate } from "../../../core/utils/helper";

const prisma = new PrismaClient();

export class OrderService {
  async createOrder(data: ICreateOrder) {
    return prisma.order.create({
      data: {
        totalPrice: data.totalPrice,
        status: data.status || "pending",
        orderItems: {
          create: data.orderItems.map((item) => ({
            productItemId: item.productItemId,
            quantity: item.quantity,
            price: undefined,
            orderItemModifiers: {
              create: item.modifiers?.map((mod) => ({
                modifierId: mod.modifierId,
                price: mod.price,
              })) || [],
            },
          })),
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

  async getOrderById(id: string) {
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

  async updateOrder(id: string, data: Partial<ICreateOrder>) {
    return prisma.order.update({
      where: { id },
      data: {
        totalPrice: data.totalPrice,
        status: data.status,
        orderItems: {
          upsert: data.orderItems?.map((item) => ({
            where: { id: item.id || 'INVALID_ID' }, // Ensure valid ID or use a placeholder
            update: formatOrderItemUpdate(item),
            create: formatOrderItemCreate(item, id),
          })) || [],
        },
      },
      include: {
        orderItems: {
          include: {
            product: true,
            orderItemModifiers: {
              include: { modifier: true },
            },
          },
        },
      },
    });
  }

  async deleteOrder(id: string) {
    return prisma.order.delete({
      where: { id },
    });
  }
}
