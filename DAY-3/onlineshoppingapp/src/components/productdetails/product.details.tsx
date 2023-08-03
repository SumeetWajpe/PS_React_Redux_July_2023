import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../rating/rating.component";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theProduct, setTheProduct] = useState(new ProductModel());
  useEffect(() => {
    fetch(`http://localhost:3500/products/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((product: ProductModel) => setTheProduct(product));
  }, []);
  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theProduct.imageUrl}
              className="card-img-top"
              alt={theProduct.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theProduct.title}</h2>
            <Rating noofstars={theProduct.rating} color="orange" />
            <p className="card-text">₹.{theProduct.price}</p>

            <button className="btn btn-outline-primary">
              {theProduct.likes} {} <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <div>{theProduct.description}</div>
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
