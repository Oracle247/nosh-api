import { ICreateOrder } from "../interfaces/OrderInterface";
export declare class OrderService {
    createOrder(data: ICreateOrder): Promise<{
        orderItems: ({
            product: {
                name: string;
                id: string;
                image: string | null;
                price: number;
                createdAt: Date;
                updatedAt: Date;
            };
            orderItemModifiers: ({
                modifier: {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    priceAdjustment: number;
                    modifierGroupId: string;
                };
            } & {
                id: string;
                price: number;
                orderItemId: string;
                modifierId: string;
            })[];
        } & {
            id: string;
            price: number;
            productItemId: string;
            orderId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        totalPrice: number;
    }>;
    getAllOrders(): Promise<({
        orderItems: ({
            product: {
                name: string;
                id: string;
                image: string | null;
                price: number;
                createdAt: Date;
                updatedAt: Date;
            };
            orderItemModifiers: ({
                modifier: {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    priceAdjustment: number;
                    modifierGroupId: string;
                };
            } & {
                id: string;
                price: number;
                orderItemId: string;
                modifierId: string;
            })[];
        } & {
            id: string;
            price: number;
            productItemId: string;
            orderId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        totalPrice: number;
    })[]>;
    getOrderById(id: string): Promise<{
        orderItems: ({
            product: {
                name: string;
                id: string;
                image: string | null;
                price: number;
                createdAt: Date;
                updatedAt: Date;
            };
            orderItemModifiers: ({
                modifier: {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    priceAdjustment: number;
                    modifierGroupId: string;
                };
            } & {
                id: string;
                price: number;
                orderItemId: string;
                modifierId: string;
            })[];
        } & {
            id: string;
            price: number;
            productItemId: string;
            orderId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        totalPrice: number;
    }>;
    updateOrder(id: string, data: Partial<ICreateOrder>): Promise<{}>;
    deleteOrder(id: string): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        totalPrice: number;
    }>;
}
