import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";

type ProductProps = {
  productdetails: ProductModel;
};

type ProductState = {
  currLikes: number;
};

export default class Product extends Component<ProductProps, ProductState> {
  state: Readonly<ProductState> = {
    currLikes: this.props.productdetails.likes,
  };
  IncrementLikes(): void {
    console.log("Within IncrementLikes");
    // this.props.productdetails.likes++; // For React(Component) props are readonly
    // this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }
  render() {
    return (
      <div className="col-md-3 my-1">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            className="card-img-top"
            alt={this.props.productdetails.title}
            height="150px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.productdetails.title}</h5>
            <p className="card-text">
              {" "}
              <Rating
                noofstars={this.props.productdetails.rating}
                color="orange"
              />{" "}
            </p>

            <p className="card-text">₹.{this.props.productdetails.price}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.IncrementLikes()}
            >
              {/* {this.props.productdetails.likes}{" "} */}
              {this.state.currLikes}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
