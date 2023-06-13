import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/productsSlice";

import cartReducer from "./Cart/cartSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
