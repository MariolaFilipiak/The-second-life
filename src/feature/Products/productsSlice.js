import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "initial",
  },
  reducers: {
    getProducts: (state) => {
      state.status = "loading";
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload.products;
      state.status = "success";
    },
    getProductsError: (state) => {
      state.products = null;
      state.status = "error";
    },
  },
});
export const { getProducts, getProductsSuccess, getProductsError } =
  productsSlice.actions;

export const selectProductsState = (state) => state.products;
export const selectProducts = (state) => selectProductsState(state).products;
export const selectProductsStatus = (state) =>
  selectProductsState(state).status;

export default productsSlice.reducer;
