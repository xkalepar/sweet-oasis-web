import { describe, it, expect } from 'vitest';
import { cartReducer } from '../CartContext';
import type { CartState } from '@/types/ui';

describe('cartReducer', () => {
  it('adds new item', () => {
    const state: CartState = { items: [], subtotal: 0 };
    const next = cartReducer(state, { type: 'ADD', item: { productId: 'p1', name: 'Test', image: '', price: 5, quantity: 2 } as any });
    expect(next.items.length).toBe(1);
    expect(next.subtotal).toBe(10);
  });

  it('increments quantity of existing item', () => {
    const state: CartState = { items: [{ productId: 'p1', name: 'Test', image: '', price: 5, quantity: 1 } as any], subtotal: 5 };
    const next = cartReducer(state, { type: 'ADD', item: { productId: 'p1', name: 'Test', image: '', price: 5, quantity: 3 } as any });
    expect(next.items[0].quantity).toBe(4);
    expect(next.subtotal).toBe(20);
  });

  it('updates quantity', () => {
    const state: CartState = { items: [{ productId: 'p1', name: 'Test', image: '', price: 5, quantity: 1 } as any], subtotal: 5 };
    const next = cartReducer(state, { type: 'QTY', productId: 'p1', quantity: 2 });
    expect(next.items[0].quantity).toBe(2);
    expect(next.subtotal).toBe(10);
  });

  it('removes item', () => {
    const state: CartState = { items: [{ productId: 'p1', name: 'Test', image: '', price: 5, quantity: 1 } as any], subtotal: 5 };
    const next = cartReducer(state, { type: 'REMOVE', productId: 'p1' });
    expect(next.items.length).toBe(0);
    expect(next.subtotal).toBe(0);
  });

  it('clears cart', () => {
    const state: CartState = { items: [{ productId: 'p1', name: 'Test', image: '', price: 5, quantity: 1 } as any], subtotal: 5 };
    const next = cartReducer(state, { type: 'CLEAR' });
    expect(next.items.length).toBe(0);
    expect(next.subtotal).toBe(0);
  });
});
