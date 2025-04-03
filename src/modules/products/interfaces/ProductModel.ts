
export interface ICreateProduct {
  id?: string;
  name: string;
  price: number;
  image: string | null;
  modifierGroups: {
    id?: string;
    name: string;
    isRequired: boolean;
    maxSelections: number;
    modifiers: { id?: string, name: string; priceAdjustment: number }[];
  }[];
}
