import React, { Component, useState } from "react";

// export default class Counter extends Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = { count: this.props.initialCount };
//   }

//   render() {
//     return (
//       <div>
//         <p>Count : {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           ++
//         </button>
//       </div>
//     );
//   }
// }

const Counter = (props: any) => {
  const [count, setCount] = useState(props.initialState);
  return (
    <div>
      {" "}
      <div>
        <p>Count : {count}</p>{" "}
        <button onClick={() => setCount(count + 1)}>++ </button>{" "}
      </div>
    </div>
  );
};

export default Counter;
