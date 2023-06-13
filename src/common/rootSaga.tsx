import { all } from "redux-saga/effects";
import { productsSaga } from "../features/Products/productsSaga";

export default function* rootSaga() {
    yield all([productsSaga()]);
  }