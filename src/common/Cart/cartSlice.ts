import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: any;
  quantity: number;
  price: number;
  image: any;
  title: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotalQuantity = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalValue = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default cartSlice.reducer;
