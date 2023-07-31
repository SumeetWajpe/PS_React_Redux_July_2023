import React, { Component } from "react";

type RatingProps = {
  noofstars: number;
};

export default class Rating extends Component<RatingProps> {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <i className="fa-solid fa-star" style={{ color: "orange" }}></i>,
      );
    }
    return <>{ratings}</>;
  }
}
