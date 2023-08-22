import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";
import { UserModel } from "../../models/auth.model";

let initialState: UserModel = {
  isUserAuthenticated: false,
  uname: "",
  token: "",
};

let authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUserAuthenticated: (store, action: PayloadAction<UserModel>) => {
      store.isUserAuthenticated = action.payload.isUserAuthenticated;
      store.token = action.payload.token;
      store.uname = action.payload.uname;
    },
  },
});

export let { setUserAuthenticated } = authSlice.actions; // action creators
export default authSlice.reducer;
