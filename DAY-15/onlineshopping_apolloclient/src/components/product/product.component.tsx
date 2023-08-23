import { useState } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";

type ProductProps = {
  productdetails: ProductModel;
};

let Product: React.FC<ProductProps> = (props: ProductProps) => {
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
          <div className="d-flex">
            <button className="btn btn-outline-primary">
              {props.productdetails.likes}{" "}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>

            <button className="btn btn-outline-danger mx-1">
              <i className="fa-solid fa-trash"></i>
            </button>
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="chkAddItemToCart"
                className="form-check-input"
              />{" "}
              <label htmlFor="chkAddItemToCart">Add to Cart</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
