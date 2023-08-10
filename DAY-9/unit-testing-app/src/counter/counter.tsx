import React, { Component } from "react";

export default class Counter extends Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ++
        </button>
      </div>
    );
  }
}
