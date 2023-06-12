import { all } from "redux-saga/effects";
import { productSaga } from "../features/Products/ProductDetail/productSaga";
import { productsSaga } from "../features/Products/productsSaga";

export default function* rootSaga() {
    yield all([productsSaga(),productSaga()]);
  }