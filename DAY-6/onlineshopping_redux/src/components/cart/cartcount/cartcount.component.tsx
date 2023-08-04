import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";

const CartCount = () => {
  const cartItems = useSelector((store: AppState) => store.carts);
  return (
    <div>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="badge rounded-pill text-bg-primary">
        {cartItems.length}
      </span>
    </div>
  );
};

export default CartCount;
