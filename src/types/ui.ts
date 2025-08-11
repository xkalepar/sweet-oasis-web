// ui types
export type Locale = 'ar' | 'en' | 'tr';

export interface CartItem {
  productId: string;
  variantId?: string;
  name: string;
  nameAr?: string;
  image: string;
  price: number;
  quantity: number;
  customizations?: Record<string, any>;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
}
