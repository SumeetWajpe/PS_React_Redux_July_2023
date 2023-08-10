import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type ContextDataType = {
  count: number;
  increment: (incrementBy: number) => void;
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
        value={{
          count,
          increment: (incrementBy: number) => setCount(count + incrementBy),
        }}
      >
        <Parent />
      </CounterContext.Provider>
    </>
  );
}

function Parent() {
  const [count, setCount] = useState(1000);

  return (
    <>
      <CounterContext.Provider
        value={{
          count,
          increment: (incrementBy: number) => setCount(count + incrementBy),
        }}
      >
        <Child />
        <hr />
        <AnotherChild />
      </CounterContext.Provider>
    </>
  );
}
function Child() {
  let ctx = useContext(CounterContext); // hook (consumer) looks out for nearest provider
  return (
    <>
      <p>(Child)Count : {ctx.count}</p>
      <button onClick={() => ctx.increment(2)}>++</button>
    </>
  );
}

function AnotherChild() {
  return (
    <CounterContext.Consumer>
      {ctx => (
        <>
          <p>(AnotherChild)Count : {ctx.count}</p>
          <button onClick={() => ctx.increment(4)}>++</button>
        </>
      )}
    </CounterContext.Consumer>
  );
}
