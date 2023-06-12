import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
        getProductsSuccess: (state, action) => {
            state.products = action.payload.products;
            state.status = "success";
        },
        getProductsError: (state) => {
            state.products = [];
            state.status = "error";
        },
    },
});
export const { getProducts, getProductsSuccess, getProductsError, } = productsSlice.actions;
export const selectProductsState = (state) => state.products;
export const selectProducts = (state) => selectProductsState(state).products;
export const selectProductsStatus = (state) => selectProductsState(state).status;
export default productsSlice.reducer;
