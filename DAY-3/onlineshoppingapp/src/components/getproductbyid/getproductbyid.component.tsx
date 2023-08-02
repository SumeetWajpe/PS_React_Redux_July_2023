import { useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";

let GetProductById: React.FC = () => {
  let [productId, setProductId] = useState<number>(1);
  let [theProduct, setTheProduct] = useState<ProductModel>(new ProductModel());

  useEffect(() => {
    // fetch("http://localhost:3500/products/" + productId)
    //   .then(res => res.json())
    //   .then(product => setTheProduct(product));
    try {
      (async () => {
        let res = await fetch("http://localhost:3500/products/" + productId);
        let product = await res.json();
        setTheProduct(product);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [productId]);

  return (
    <>
      <label htmlFor="txtProductId">Product Id : </label>
      <input
        type="text"
        id="txtProductId"
        onChange={(e: any) => setProductId(e.target.value)}
      />

      <p>{theProduct.title}</p>
    </>
  );
};

export default GetProductById;
// 1st -> fetch the id from textbox
// 2nd -> make a fetch api with the id fetched from textbox
// 3rd -> render the title of the product (response)
