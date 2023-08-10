import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GrandParent } from "./App";
import Product from "./composition";
import Button from "./composition";
import BasicExample from "./react-bootstrap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
// root.render(<GrandParent />);

let UI = (
  <>
    <Button classes="btn btn-primary">Hello !</Button>
    <Button classes="btn btn-outline-danger">
      <i className="fa-solid fa-thumbs-up"></i>
    </Button>
    <Button>
      <i className="fa-solid fa-thumbs-up"></i> 200
    </Button>
  </>
);
// root.render(<BasicExample />);
root.render(UI);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
