import React from "react";

import ListOfProducts from "../listofproducts/listofproducts.component";
import GetProductById from "../getproductbyid/getproductbyid.component";
import Posts from "../posts/posts.component";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Header from "../header/header.component";
import Dashboard from "../dashboard/dashboard.component";
import ProductDetails from "../productdetails/product.details";
import NewProductWithHookForm from "../newproduct/newProduct.reacthookform";

let App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {/* <a href="/">Products</a> | <a href="/posts">Posts</a> */}
        {/* <Link to="/">Products</Link> | <Link to="/posts"> Posts </Link> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<ListOfProducts />} />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="newproduct" element={<NewProductWithHookForm />} />

            <Route path="posts" element={<Posts />} />
            <Route path="getproductbyid" element={<GetProductById />} />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
