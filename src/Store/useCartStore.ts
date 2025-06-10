import {craete} from "zustand";
import {persist} from "zustand/middleware";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = create(set, get) => ({
    cartItems: [],
    
    addToCart: (item: CartItem) => {}
    }
})