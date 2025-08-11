import { createContext, useContext, useEffect, useMemo, useReducer, ReactNode } from 'react';
import type { CartItem, CartState } from '@/types/ui';

const CART_KEY = 'wb_cart_v1';

export type CartAction =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; productId: string }
  | { type: 'QTY'; productId: string; quantity: number }
  | { type: 'CLEAR' };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.productId === action.item.productId);
      let items: CartItem[];
      if (existing) {
        items = state.items.map(i => i.productId === action.item.productId ? { ...i, quantity: i.quantity + action.item.quantity } : i);
      } else {
        items = [...state.items, action.item];
      }
      const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, subtotal };
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.productId !== action.productId);
      const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, subtotal };
    }
    case 'QTY': {
      const items = state.items.map(i => i.productId === action.productId ? { ...i, quantity: Math.max(1, action.quantity) } : i);
      const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, subtotal };
    }
    case 'CLEAR':
      return { items: [], subtotal: 0 };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  add: (item: CartItem) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, quantity: number) => void;
  clear: () => void;
  count: number;
} | undefined>(undefined);

function loadInitial(): CartState {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { items: [], subtotal: 0 };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitial);

  useEffect(() => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(state)); } catch {}
  }, [state]);

  const api = useMemo(() => ({
    state,
    add: (item: CartItem) => dispatch({ type: 'ADD', item }),
    remove: (productId: string) => dispatch({ type: 'REMOVE', productId }),
    setQty: (productId: string, quantity: number) => dispatch({ type: 'QTY', productId, quantity }),
    clear: () => dispatch({ type: 'CLEAR' }),
    count: state.items.reduce((s, i) => s + i.quantity, 0)
  }), [state]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
