import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const CounterContext = React.createContext<number>(0);

export function GrandParent() {
  const [count] = useState(100);
  return (
    <>
      <CounterContext.Provider value={count}>
        <Parent />
      </CounterContext.Provider>
    </>
  );
}

function Parent() {
  return (
    <>
      <Child />
    </>
  );
}

function Child() {
  const ctx = useContext(CounterContext); // hook (consumer)
  return (
    <>
      <p>Count : {ctx}</p>
    </>
  );
}
