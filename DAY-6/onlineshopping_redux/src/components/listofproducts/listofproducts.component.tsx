import { useEffect, useState } from "react";
import Product from "../product/product.component";
import { ProductModel } from "../../models/product.model";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

let ListOfProducts: React.FC = () => {
  const products: ProductModel[] = useSelector(
    (store: AppState) => store.products,
  );
  return (
    <>
      <header>
        <h1>List Of Products</h1>
      </header>
      <main className="row">
        {products?.map(product => (
          <Product productdetails={product} key={product.id} />
        ))}
      </main>
    </>
  );
};

export default ListOfProducts;
