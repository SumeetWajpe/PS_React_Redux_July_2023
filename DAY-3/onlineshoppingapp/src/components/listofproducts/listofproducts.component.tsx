import { useEffect, useState } from "react";
import Product from "../product/product.component";
import { ProductModel } from "../../models/product.model";

let ListOfProducts: React.FC = () => {
  let [products, setProducts] = useState<ProductModel[]>([]); // best practise

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    fetch("http://localhost:3500/products")
      .then(res => res.json())
      .then(products => setProducts(products));
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
