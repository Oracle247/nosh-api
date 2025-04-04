import { Product } from "@prisma/client";
import { ICreateProduct } from "../interfaces/ProductModel";
export declare class ProductService {
    createProduct(data: ICreateProduct): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    updateProduct(id: string, data: Partial<ICreateProduct>): Promise<Product | null>;
    deleteProduct(id: string): Promise<Product | null>;
}
