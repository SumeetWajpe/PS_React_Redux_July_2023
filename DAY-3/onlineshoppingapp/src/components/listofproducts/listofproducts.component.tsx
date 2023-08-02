import { useEffect, useState } from "react";
import Product from "../product/product.component";
import { ProductModel } from "../../models/product.model";
import NewProduct from "../newproduct/newproduct.component";

let ListOfProducts: React.FC = () => {
  let [products, setProducts] = useState<ProductModel[]>([]); // best practise

  let DeleteAProduct = (id: number) => {
    console.log("Delete a product - ", id);
    setProducts(products.filter(product => product.id !== id));
  };

  let AddANewProduct = (newProductToBeAdded: ProductModel) => {
    setProducts([...products, newProductToBeAdded]);
  };

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    fetch("http://localhost:3500/products")
      .then(res => res.json())
      .then(products => setProducts(products));
  }, []);
  return (
    <>
      <NewProduct
        AddANewProduct={(newProduct: ProductModel) =>
          AddANewProduct(newProduct)
        }
      />
      <header>
        <h1>List Of Products</h1>
      </header>
      <main className="row">
        {products?.map(product => (
          <Product
            productdetails={product}
            key={product.id}
            DeleteAProduct={(id: number) => DeleteAProduct(id)}
          />
        ))}
      </main>
    </>
  );
};

export default ListOfProducts;
