import { PayloadAction,  createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];

let productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    incrementLikes: (store: ProductModel[], action: PayloadAction<number>) => {
      console.log("Within incrementLikes");

      let index = store.findIndex(p => p.id == action.payload);
      store[index].likes++; // updated store [Immer]
      return store;
    },
    deleteProduct: (store: ProductModel[], action: PayloadAction<number>) => {
      store = store.filter(p => p.id !== action.payload);
      return store;
    },
    addNewProduct: (
      store: ProductModel[],
      action: PayloadAction<ProductModel>,
    ) => {
      let productToBeAdded = action.payload;
      store.push(productToBeAdded);
      return store;
    },
  },
});

export let { incrementLikes, deleteProduct, addNewProduct } =
  productSlice.actions; // action creators
export default productSlice.reducer;
