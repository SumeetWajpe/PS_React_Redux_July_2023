import { call, put, retry, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios, { AxiosResponse } from "axios";
import { ProductModel } from "../models/product.model";
import {
  deleteProduct,
  handleError,
  setAllProducts,
} from "../redux/slices/products.slices";
import { PayloadAction } from "@reduxjs/toolkit";

// type AxiosResponse = {
//   data: ProductModel[];
//   status: number;
//   statusText: string;
//   headers: any;
//   config: any;
//   request: any;
// };

function getProducts(token: string) {
  return axios.get<ProductModel[]>("http://localhost:5555/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function* fetchProductsAsync(action: PayloadAction<string>) {
  try {
    let response: AxiosResponse<ProductModel[]> = yield call(
      getProducts,
      action.payload,
    );
    //   console.log(response.data);
    yield put(setAllProducts(response.data)); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
  }
}

// function* retryFetchProductsSaga() {
//   try {
//     const SECOND = 1000;
//     const response: AxiosResponse = yield retry(3, 10 * SECOND, getProducts,token);
//     yield put(setAllProducts(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

function deleteProductFromServer(id: number) {
  // add the token - auth header
  return axios.delete("http://localhost:5555/products/delete/" + id);
}

function* deleteProductAsync(action: PayloadAction<number>) {
  try {
    let response: AxiosResponse = yield call(
      deleteProductFromServer,
      action.payload,
    );
    if (response.status == 200) {
      yield put(deleteProduct(action.payload));
    }
  } catch (error) {
    // yield put(handleError("Something went wrong !")); // dispatch an action for error
  }
}

export function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsAsync);
  // yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, retryFetchProductsSaga);
  yield takeLatest(SagaActions.DELETE_PRODUCT_ASYNC, deleteProductAsync);
}
