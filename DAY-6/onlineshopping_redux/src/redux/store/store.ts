import { configureStore } from "@reduxjs/toolkit";
import products from "../slices/products.slices";
import posts from "../slices/posts.slice";

const store = configureStore({ reducer: { products, posts } });
export default store;
