import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../feature/Products/productsSlice";
import productReducer from "../feature/Products/Product/productSlice";
import cartReducer from "../common/Cart/cartSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart:cartReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
