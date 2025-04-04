export interface ICreateOrderItem {
    id?: string;
    productItemId: string;
    quantity: number;
    modifiers?: {
        id?: string;
        modifierId: string;
        price: number;
    }[];
}
export interface ICreateOrder {
    id?: string;
    totalPrice: number;
    status?: string;
    orderItems: ICreateOrderItem[];
}
