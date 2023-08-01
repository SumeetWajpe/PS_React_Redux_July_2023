import { useState } from "react";

export let Counter: React.FC = () => {
  let [count, setCount] = useState(10);
  return (
    <>
      <p>{count}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ++
      </button>
    </>
  );
};
