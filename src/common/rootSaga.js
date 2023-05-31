import { all } from "redux-saga/effects";
import { productSaga } from "../feature/Products/Product/productSaga";
import { productsSaga } from "../feature/Products/productsSaga";

export default function* rootSaga() {
    yield all([productsSaga(),productSaga()]);
  }