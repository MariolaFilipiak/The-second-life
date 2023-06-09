import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
        getProductSuccess: (state, { payload }) => {
            state.product = payload;
            state.status = "success";
        },
        getProductError: (state) => {
            state.product = null;
            state.status = "error";
        },
    },
});
export const { getProduct, getProductSuccess, getProductError } = productSlice.actions;
export const selectProductState = (state) => state.product;
export const selectProduct = (state) => selectProductState(state).product;
export const selectProductStatus = (state) => selectProductState(state).status;
export default productSlice.reducer;
