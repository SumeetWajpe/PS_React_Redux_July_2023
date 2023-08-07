import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { incrementLikes } from "../../redux/slices/products.slices";

const ProductDetails: React.FC = () => {
  const { id = "0" } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((store: AppState) => store.products.products);
  const theProduct = products?.find(p => p.id == parseInt(id));
  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theProduct?.imageUrl}
              className="card-img-top"
              alt={theProduct?.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theProduct?.title}</h2>
            <Rating noofstars={theProduct?.rating || 0} color="orange" />
            <p className="card-text">₹.{theProduct?.price}</p>

            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(incrementLikes(theProduct?.id || 0))}
            >
              {theProduct?.likes} {} <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <div>{theProduct?.description}</div>
            <button
              className="btn btn-success"
              onClick={() => navigate("/dashboard/products")}
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
