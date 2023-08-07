import { configureStore } from "@reduxjs/toolkit";
import products from "../slices/products.slices";
import posts from "../slices/posts.slice";
import carts from "../slices/cart.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../saga/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: { products, posts, carts },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);
export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// let city = "Pune";
// let companyName = "IBM";

// let company = { companyName: companyName, city: city };
//let company = { companyName, city }; // Enhanced Object Literal syntax
