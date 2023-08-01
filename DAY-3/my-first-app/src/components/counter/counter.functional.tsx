import { useState } from "react";

export let Counter: React.FC = () => {
  let [data, setData] = useState({ count: 10, age: 18 });

  return (
    <>
      <p>{data.count}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setData({ ...data, count: data.count + 1 });
        }}
      >
        ++
      </button>
      <hr />
      <p>{data.age}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setData({ ...data, age: data.age + 1 });
        }}
      >
        ++
      </button>
    </>
  );
};
