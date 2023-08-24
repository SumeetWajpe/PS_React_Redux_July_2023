import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GETALLPRODUCTS, GET_PRODUCT_BY_ID } from "../../graphql/querries";
import { client } from "../../index";
const ProductDetails_Cache: React.FC = () => {
  let [product, setProduct] = useState(new ProductModel());
  const { id = "0" } = useParams();
  //   let [getProductById, { data }] = useLazyQuery(GET_PRODUCT_BY_ID);

  const navigate = useNavigate();
  useEffect(() => {
    const { products } = client.readQuery({ query: GETALLPRODUCTS });
    let theProduct = products.find((p: ProductModel) => p.id == +id);

    setProduct(theProduct);
  }, []);

  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={product?.imageUrl}
              className="card-img-top"
              alt={product?.title}
              height="100%"
              width="100%"
            />

            {/* <video
              height="100%"
              width="100%"
              controls
              src={"http://localhost:5555/products/video/" + product?.id}
            ></video> */}
          </div>
          <div className="col-md-3 border-start">
            <h2>{product?.title}</h2>
            <Rating noofstars={product?.rating || 0} color="orange" />
            <p className="card-text">₹.{product?.price}</p>

            <button className="btn btn-outline-primary">
              {product?.likes} {} <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <div>{product?.description}</div>
            <button
              className="btn btn-success"
              onClick={() => navigate("/dashboard")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails_Cache;
