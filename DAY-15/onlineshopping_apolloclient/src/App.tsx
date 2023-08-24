import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import ListOfProducts from "./components/listofproducts/listofproducts.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="newproduct" element={<NewProductWithHookForm />} />

        <Route path="posts" element={<Posts />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
