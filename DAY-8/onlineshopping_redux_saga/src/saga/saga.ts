import { call, put, retry, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios from "axios";
import { ProductModel } from "../models/product.model";
import { deleteProduct, setAllProducts } from "../redux/slices/products.slices";
import { PayloadAction } from "@reduxjs/toolkit";

type AxiosResponse = {
  data: ProductModel[];
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
};

function getProducts() {
  return axios.get<ProductModel[]>("http://localhost:3500/products");
}

function* fetchProductsAsync() {
  try {
    let response: AxiosResponse = yield call(getProducts);
    //   console.log(response.data);
    yield put(setAllProducts(response.data)); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
  }
}

function* retryFetchProductsSaga() {
  try {
    const SECOND = 1000;
    const response: AxiosResponse = yield retry(3, 10 * SECOND, getProducts);
    yield put(setAllProducts(response.data));
  } catch (error) {
    console.log(error);
  }
}

function deleteProductFromServer(id: number) {
  return axios.delete("http://localhost:3500/products/" + id);
}

function* deleteProductAsync(action: PayloadAction<number>) {
  let response: AxiosResponse = yield call(
    deleteProductFromServer,
    action.payload,
  );
  if (response.status == 200) {
    yield put(deleteProduct(action.payload));
  }
}

export function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsAsync);
  // yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, retryFetchProductsSaga);
  yield takeLatest(SagaActions.DELETE_PRODUCT_ASYNC, deleteProductAsync);
}
