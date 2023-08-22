import { useSelector } from "react-redux";
import ListOfProducts from "../listofproducts/listofproducts.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/dashboard.component";
import ProductDetails from "../productdetails/product.details";
import NewProductWithHookForm from "../newproduct/newProduct.reacthookform";
import React, { Suspense } from "react";
import Login from "../login/login.component";
// import Posts from "../posts/posts.component";
const Posts = React.lazy(() => import("../posts/posts.component"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ListOfProducts />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="newproduct" element={<NewProductWithHookForm />} />

          <Route
            path="posts"
            element={
              <Suspense fallback={<div>Posts Loading...</div>}>
                <Posts />
              </Suspense>
            }
          />
          {/* <Route path="getproductbyid" element={<GetProductById />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
