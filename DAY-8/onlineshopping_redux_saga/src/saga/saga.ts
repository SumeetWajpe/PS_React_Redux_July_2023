import { call, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios from "axios";
import { ProductModel } from "../models/product.model";

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
  let response: AxiosResponse = yield call(getProducts);
  console.log(response.data);
}

export function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsAsync);
}
