import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/productsSlice";
import productReducer, { getProduct, getProductSuccess, getProductError, selectProductState, selectProduct, selectProductStatus, } from "../features/Products/ProductDetail/productSlice";
import cartReducer from "./Cart/cartSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
export { getProduct, getProductSuccess, getProductError, selectProductState, selectProduct, selectProductStatus, };
