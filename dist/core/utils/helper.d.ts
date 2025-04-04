import { ICreateOrderItem } from '../../modules/order/interfaces/OrderInterface';
export default class HelperClass {
    static checkPhoneNumber(phoneNumber?: string): string;
    static formatPhoneNumber(number: string): string;
    static titleCase(string: string): string;
    static upperCase(string: string): string;
    static capitalCase(string: string): string;
    static generateRandomChar(length?: number, type?: string): string;
    static userNameValidator(string: string): void;
    static removeUnwantedProperties(object: unknown, properties: string[]): {
        [key: string]: string;
    };
    static calculateAmountPercentage(args: {
        amount: number;
        percentage: number;
    }): number;
    static isIdentifierEmailOrPhone(input: string): {
        isEmail: boolean;
        isPhoneNumber?: undefined;
    } | {
        isPhoneNumber: boolean;
        isEmail?: undefined;
    };
}
export declare const upsertModifierGroup: (productId: string, group: any) => {
    where: {
        id: any;
    };
    update: {
        name: any;
        isRequired: any;
        maxSelections: any;
        modifiers: {
            upsert: any;
        };
    };
    create: {
        name: any;
        isRequired: any;
        maxSelections: any;
        productItemId: string;
        modifiers: {
            create: any;
        };
    };
};
export declare const upsertModifier: (modifier: any) => {
    where: {
        id: any;
    };
    update: {
        name: any;
        priceAdjustment: any;
    };
    create: {
        name: any;
        priceAdjustment: any;
    };
};
export declare const createModifier: (modifier: any) => {
    name: any;
    priceAdjustment: any;
};
export declare const formatOrderItemUpdate: (item: ICreateOrderItem) => {
    quantity: number;
    orderItemModifiers: {
        upsert: {
            where: {
                id: string;
            };
            update: {
                price: number;
            };
            create: {
                price: number;
                modifier: {
                    connect: {
                        id: string;
                    };
                };
            };
        }[];
    };
};
export declare const formatOrderItemCreate: (item: ICreateOrderItem, orderId: string) => {
    productItemId: string;
    quantity: number;
    orderId: string;
    orderItemModifiers: {
        create: {
            price: number;
            modifier: {
                connect: {
                    id: string;
                };
            };
        }[];
    };
};
