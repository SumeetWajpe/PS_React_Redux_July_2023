import { createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../models/post.model";

let initialState: PostModel[] = [
  { id: 1, title: "dummy", userId: 1, body: "dummy" },
];

let postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    addPost: (store, action) => {
      console.log("Within addPost");
      return store; // updated store
    },
  },
});

export let { addPost } = postsSlice.actions;
export default postsSlice.reducer;
