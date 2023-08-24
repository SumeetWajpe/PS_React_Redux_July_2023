import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../graphql/querries";

const ProductDetails: React.FC = () => {
  const { id = "0" } = useParams();
  let { data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: id },
    // fetchPolicy: "network-only",
  });

  const navigate = useNavigate();

  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={data?.product?.imageUrl}
              className="card-img-top"
              alt={data?.product?.title}
              height="100%"
              width="100%"
            />

            {/* <video
              height="100%"
              width="100%"
              controls
              src={"http://localhost:5555/products/video/" + data?.product?.id}
            ></video> */}
          </div>
          <div className="col-md-3 border-start">
            <h2>{data?.product?.title}</h2>
            <Rating noofstars={data?.product?.rating || 0} color="orange" />
            <p className="card-text">₹.{data?.product?.price}</p>

            <button className="btn btn-outline-primary">
              {data?.product?.likes} {}{" "}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <div>{data?.product?.description}</div>
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

export default ProductDetails;
