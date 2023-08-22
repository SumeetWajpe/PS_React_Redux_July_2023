import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CartCount from "../cart/cartcount/cartcount.component";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const user = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Online Shopping
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard/newproduct"
              >
                New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/getproductbyid">
                Get Product By Id
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          Hello <strong>{user.uname}</strong> !
          <CartCount />
          <span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/", { replace: true })}
            >
              Logout
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
