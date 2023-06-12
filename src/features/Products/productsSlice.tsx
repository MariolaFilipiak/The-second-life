import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: any;
  image: any;
  title: string;
  price: number;
};

interface ProductsState {
  products: Product[];
  status: "initial" | "loading" | "success" | "error";
}

const initialState: ProductsState = {
  products: [],
  status: "initial",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.status = "loading";
    },
    getProductsSuccess: (state, action: PayloadAction<{ products: Product[] }>) => {
      state.products = action.payload.products;
      state.status = "success";
    },
    getProductsError: (state) => {
      state.products = [];
      state.status = "error";
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
} = productsSlice.actions;

export const selectProductsState = (state: { products: ProductsState }) => state.products;
export const selectProducts = (state: { products: ProductsState }) => selectProductsState(state).products;
export const selectProductsStatus = (state: { products: ProductsState }) => selectProductsState(state).status;

export default productsSlice.reducer;
