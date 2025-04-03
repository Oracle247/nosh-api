import { PrismaClient, Product } from "@prisma/client";
import { ICreateProduct } from "../interfaces/ProductModel";
import { upsertModifierGroup } from "../../../core/utils/helper";

const prisma = new PrismaClient();

export class ProductService {
  async createProduct(data: ICreateProduct): Promise<Product> {
    return prisma.product.create({
      data: {
        ...data,
        modifierGroups: {
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
        },
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

  async getAllProducts(): Promise<Product[]> {
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

  async getProductById(id: string): Promise<Product | null> {
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

  async updateProduct(
    id: string,
    data: Partial<ICreateProduct>
  ): Promise<Product | null> {
    return prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        modifierGroups: data.modifierGroups
          ? {
            upsert: data.modifierGroups.map((group) => upsertModifierGroup(id, group)),
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

  async deleteProduct(id: string): Promise<Product | null> {
    return prisma.product.delete({ where: { id } });
  }
}
