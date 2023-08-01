import React, { Component } from "react";
import Icon from "../atoms/icon.component";

type RatingProps = {
  noofstars: number;
  color: string;
};

export default class Rating extends Component<RatingProps> {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <Icon classes="fa-solid fa-star" />,

        // <i
        //   className="fa-solid fa-star"
        //   style={{ color: this.props.color }}
        // ></i>,
      );
    }
    return <>{ratings}</>;
  }
}
