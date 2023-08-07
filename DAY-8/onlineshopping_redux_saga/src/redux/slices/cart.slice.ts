import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];

let cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProductToCart: (
      store: ProductModel[],
      action: PayloadAction<ProductModel>,
    ) => {
      let productToBeAdded = action.payload;
      store.push(productToBeAdded);
      return store;
    },

    removeProductFromCart: (
      store: ProductModel[],
      action: PayloadAction<number>,
    ) => {
      store = store.filter(p => p.id !== action.payload);
      return store;
    },
  },
});

export let { addProductToCart, removeProductFromCart } = cartSlice.actions; // action creators
export default cartSlice.reducer;
