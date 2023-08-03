import React from "react";

import ListOfProducts from "../listofproducts/listofproducts.component";
import GetProductById from "../getproductbyid/getproductbyid.component";
import Posts from "../posts/posts.component";

import { BrowserRouter, Route, Routes } from "react-router-dom";

let App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
