import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GETALLPRODUCTS } from "./graphql/querries";

function App(): any {
  let { loading, error, data } = useQuery(GETALLPRODUCTS);
  if (loading) return "Loading..";
  if (error) return `Error : ${error?.message}`;
  return <div className="App">{data?.products?.length}</div>;
}

export default App;
