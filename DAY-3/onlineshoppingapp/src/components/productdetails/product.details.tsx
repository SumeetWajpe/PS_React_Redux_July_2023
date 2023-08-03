import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <header>
        <h1>Product Details for {id}</h1>
      </header>
    </div>
  );
};

export default ProductDetails;
