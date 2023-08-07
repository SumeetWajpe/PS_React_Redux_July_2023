import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

export type ProductRequest = {
  products: ProductModel[];
  loading: boolean;
  error: string;
};

let initialState: ProductRequest = {
  products: [],
  loading: true,
  error: "",
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProductsAsync",
  async () => {
    try {
      let res = await fetch("http://localhost:3500/products");
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (error) {}
  },
);

let productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    incrementLikes: (store: ProductRequest, action: PayloadAction<number>) => {
      console.log("Within incrementLikes");

      let index = store.products.findIndex(p => p.id == action.payload);
      store.products[index].likes++; // updated store [Immer]
      return store;
    },
    deleteProduct: (store: ProductRequest, action: PayloadAction<number>) => {
      store.products = store.products.filter(p => p.id !== action.payload);
      return store;
    },
    addNewProduct: (
      store: ProductRequest,
      action: PayloadAction<ProductModel>,
    ) => {
      let productToBeAdded = action.payload;
      store.products.push(productToBeAdded);
      return store;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProductsAsync.fulfilled, (store:ProductRequest, { payload }) => {
      console.log(payload);
      store.products = payload;
      store.loading = false;
      return store;
    });
    builder.addCase(fetchProductsAsync.pending, (store:ProductRequest, { payload }) => {
      console.log(payload);
      store.products = [];
      store.loading = true;
      return store;
    });
  },
});

export let { incrementLikes, deleteProduct, addNewProduct } =
  productSlice.actions; // action creators
export default productSlice.reducer;
