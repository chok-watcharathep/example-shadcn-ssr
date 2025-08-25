export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface Shipping {
  rate: number;
  deliveryTime: string;
  isFreeShipping: boolean;
}
