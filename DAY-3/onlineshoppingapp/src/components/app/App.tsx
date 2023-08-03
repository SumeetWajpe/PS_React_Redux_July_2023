import React from "react";

import ListOfProducts from "../listofproducts/listofproducts.component";
import GetProductById from "../getproductbyid/getproductbyid.component";
import Posts from "../posts/posts.component";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

let App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <a href="/">Products</a> | <a href="/posts">Posts</a> */}
      <Link to="/">Products</Link> | <Link to="/posts"> Posts </Link>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="*"
          element={
            <>
              <h1>Resource Not found !</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
