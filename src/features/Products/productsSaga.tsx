import { call, put, takeLatest } from "redux-saga/effects";
import { getProductsData } from "../../common/getData";
import { getProducts, getProductsError, getProductsSuccess } from "./productsSlice";

function* getProductsHandler(): Generator<any, void, any> {
  try {
    const products = yield call(getProductsData);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError());
  }
}

export function* productsSaga() {
  yield takeLatest(getProducts.type, getProductsHandler);
}
