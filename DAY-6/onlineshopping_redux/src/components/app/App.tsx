import { useSelector } from "react-redux";
import ListOfProducts from "../listofproducts/listofproducts.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/dashboard.component";
import ProductDetails from "../productdetails/product.details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ListOfProducts />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          {/* <Route path="newproduct" element={<NewProductWithHookForm />} />

          <Route path="posts" element={<Posts />} />
          <Route path="getproductbyid" element={<GetProductById />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
