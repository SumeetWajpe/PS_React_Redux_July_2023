import { configureStore } from "@reduxjs/toolkit";
import products from "../slices/products.slices";
import posts from "../slices/posts.slice";
import carts from "../slices/cart.slice";
const store = configureStore({
  reducer: { products, posts, carts },
});
export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// let city = "Pune";
// let companyName = "IBM";

// let company = { companyName: companyName, city: city };
//let company = { companyName, city }; // Enhanced Object Literal syntax
