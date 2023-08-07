import { useEffect, useState } from "react";
import Product from "../product/product.component";
import { ProductModel } from "../../models/product.model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { fetchProductsAsync } from "../../redux/slices/products.slices";

let ListOfProducts: React.FC = () => {
  const { products, loading, error } = useSelector(
    (store: AppState) => store.products,
  );

  let dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);
  if (error) return <h1 className="text-danger"> Something went wrong !</h1>;
  return (
    <>
      <header>
        <h1>List Of Products</h1>
      </header>
      <main className="row">
        {loading
          ? "Loading.."
          : products?.map(product => (
              <Product productdetails={product} key={product.id} />
            ))}
      </main>
    </>
  );
};

export default ListOfProducts;
