import React, { useState } from "react";
import { ProductModel } from "../../models/product.model";

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState<ProductModel>(
    new ProductModel(),
  );
  return (
    <>
      <header>
        <h1>New Product</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center m-2">
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(newProduct);
          }}
        >
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductId">Id : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductId"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    id: +e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductTitle"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    title: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductPrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductPrice"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    price: +e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductLikes"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    likes: +e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductRating"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    rating: +e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductImage">Imageurl : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductImage"
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    imageUrl: e.target.value,
                  })
                }
              />
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
                onInput={(e: any) =>
                  setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                  })
                }
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

export default NewProduct;
