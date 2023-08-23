import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import ListOfProducts from "./components/listofproducts/listofproducts.component";

function App(): any {
  return <ListOfProducts />;
}

export default App;
