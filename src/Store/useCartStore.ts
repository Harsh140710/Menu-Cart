import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define store type
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// Create the Zustand store with persist middleware
export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage", // Key in localStorage
    }
  )
);
