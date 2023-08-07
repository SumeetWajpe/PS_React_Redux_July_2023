import { useEffect, useState } from "react";
import Product from "../product/product.component";
import { ProductModel } from "../../models/product.model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { SagaActions } from "../../saga/sagaactions";

let ListOfProducts: React.FC = () => {
  const products: ProductModel[] = useSelector(
    (store: AppState) => store.products,
  );

  let dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch({ type: SagaActions.FETCH_PRODUCTS_ASYNC });
  }, []);
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
