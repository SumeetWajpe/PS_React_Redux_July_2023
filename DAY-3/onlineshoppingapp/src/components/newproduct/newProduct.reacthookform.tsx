import React, { useState } from "react";
import { ProductModel } from "../../models/product.model";

type NewProductProps = {
  AddANewProduct: (newProduct: ProductModel) => void;
};

const NewProductWithHookForm = (props: NewProductProps) => {
  return (
    <>
      <header>
        <h1>New Product</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center m-2">
        <form>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductId">Id : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtProductId" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input type="text" id="txtProductTitle" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductPrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtProductPrice" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtProductLikes" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtProductRating" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductImage">Imageurl : </label>
            </div>
            <div className="col-md-4">
              <input type="text" id="txtProductImage" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductDescription">Description : </label>
            </div>
            <div className="col-md-4">
              <textarea
                id="txtProductDescription"
                cols={25}
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <button className="btn btn-success">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProductWithHookForm;
