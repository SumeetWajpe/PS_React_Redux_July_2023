import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import ListOfProducts from "./components/listofproducts/listofproducts.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NewProductWithHookForm from "./components/newproduct/newProduct.reacthookform";
import Header from "./components/header/header.component";
import ProductDetails from "./components/productdetails/product.details";
import ProductDetails_Cache from "./components/productdetails/product.details.cache";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        {/* <Route path="productdetails/:id" element={<ProductDetails />} /> */}
        <Route path="productdetails/:id" element={<ProductDetails_Cache />} />

        <Route path="newproduct" element={<NewProductWithHookForm />} />
        {/* <Route path="posts" element={<Posts />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
