import { useEffect, useState } from "react";

let GetProductById: React.FC = () => {
  let [productId, setProductId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3500/products/" + productId)
      .then(res => res.json())
      .then(product => console.log(product));
  });
  return (
    <>
      <label htmlFor="txtProductId">Product Id : </label>
      <input
        type="text"
        id="txtProductId"
        onInput={(e: any) => setProductId(e.target.value)}
      />
    </>
  );
};

export default GetProductById;
// 1st -> fetch the id from textbox
// 2nd -> make a fetch api with the id fetched from textbox
// 3rd -> render the title of the product (response)
