import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../common/store";

interface ProductState {
  product: any | null;
  status: "initial" | "loading" | "success" | "error";
}

const initialState: ProductState = {
  product: null,
  status: "initial",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.status = "loading";
    },
    getProductSuccess: (state, { payload }: PayloadAction<any>) => {
      state.product = payload;
      state.status = "success";
    },
    getProductError: (state) => {
      state.product = null;
      state.status = "error";
    },
  },
});

export const { getProduct, getProductSuccess, getProductError } =
  productSlice.actions;

export const selectProductState = (state: RootState) => state.product;
export const selectProduct = (state: RootState) =>
  selectProductState(state).product;
export const selectProductStatus = (state: RootState) =>
  selectProductState(state).status;

export default productSlice.reducer;
