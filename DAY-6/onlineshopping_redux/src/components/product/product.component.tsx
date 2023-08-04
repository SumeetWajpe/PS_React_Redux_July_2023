import { useState } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  incrementLikes,
} from "../../redux/slices/products.slices";
// import { Link } from "react-router-dom";

type ProductProps = {
  productdetails: ProductModel;
};

let Product: React.FC<ProductProps> = (props: ProductProps) => {
  let dispatch = useDispatch();
  return (
    <div className="col-md-3 my-1">
      <div className="card">
        {/* <Link to={`/dashboard/productdetails/${props.productdetails.id}`}> */}
        <img
          src={props.productdetails.imageUrl}
          className="card-img-top"
          alt={props.productdetails.title}
          height="150px"
          width="200px"
        />
        {/* </Link> */}

        <div className="card-body">
          <h5 className="card-title">{props.productdetails.title}</h5>
          <p className="card-text">
            {" "}
            <Rating
              noofstars={props.productdetails.rating}
              color="orange"
            />{" "}
          </p>

          <p className="card-text">₹.{props.productdetails.price}</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(incrementLikes(props.productdetails.id))}
          >
            {props.productdetails.likes}{" "}
            <i className="fa-regular fa-thumbs-up"></i>
          </button>

          <button
            className="btn btn-outline-danger mx-1"
            onClick={() => dispatch(deleteProduct(props.productdetails.id))}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
