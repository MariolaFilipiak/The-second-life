import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProductsData } from "../../../common/getData";
import { getProduct, getProductError, getProductSuccess } from "./productSlice";

function* getProductHandler(): Generator<any, void, any> {
  try {
    yield delay(500);
    const product = yield call(getProductsData);
    yield put(getProductSuccess(product));
  } catch (error) {
    yield put(getProductError());
  }
}

export function* productSaga() {
  yield takeLatest(getProduct.type, getProductHandler);
}
