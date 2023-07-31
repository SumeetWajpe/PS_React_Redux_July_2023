import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";

type ProductProps = {
  productdetails: ProductModel;
};

export default class Product extends Component<ProductProps> {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.productdetails.rating; index++) {
      ratings.push(
        <i className="fa-solid fa-star" style={{ color: "orange" }}></i>,
      );
    }
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
            <p className="card-text">{ratings}</p>

            <p className="card-text">{this.props.productdetails.price}</p>

            <p className="card-text">{this.props.productdetails.likes}</p>
          </div>
        </div>
      </div>
    );
  }
}
