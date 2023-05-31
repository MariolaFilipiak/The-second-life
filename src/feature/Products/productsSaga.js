import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProductsData } from "../../common/getData";
import { getProducts, getProductsError, getProductsSuccess } from "./productsSlice";


function* getProductsHandler() {
  try {
    yield delay(500);
    const products = yield call(getProductsData);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError());
  }
}
export function* productsSaga() {
  yield takeLatest(getProducts.type, getProductsHandler);
}
