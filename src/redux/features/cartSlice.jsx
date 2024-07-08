import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  cartItems: [],
  price: "",
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { value: initialStateValue },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.value.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.value.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      state.value.cartItems = state.value.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseQty: (state, action) => {
      const item = state.value.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.value.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeCartItem, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
