import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type ContextDataType = {
  count: number;
  increment: () => void;
};

const CounterContext = React.createContext<ContextDataType>({
  count: 0,
  increment: function () {},
});

export function GrandParent() {
  const [count, setCount] = useState(100);
  return (
    <>
      <CounterContext.Provider
        value={{ count, increment: () => setCount(count + 1) }}
      >
        <Parent />
      </CounterContext.Provider>
    </>
  );
}

function Parent() {
  return (
    <>
      <Child />
      <hr />
      <AnotherChild />
    </>
  );
}

function Child() {
  let ctx = useContext(CounterContext); // hook (consumer)
  return (
    <>
      <p>(Child)Count : {ctx.count}</p>
      <button onClick={() => ctx.increment()}>++</button>
    </>
  );
}

function AnotherChild() {
  return (
    <CounterContext.Consumer>
      {ctx => (
        <>
          <p>(AnotherChild)Count : {ctx.count}</p>
        </>
      )}
    </CounterContext.Consumer>
  );
}
