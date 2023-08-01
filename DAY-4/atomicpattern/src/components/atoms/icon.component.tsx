import React, { Component } from "react";

type IconProps = {
  classes: string;
  
};

export default class Icon extends Component<IconProps> {
  render() {
    return <i className={this.props.classes}></i>;
  }
}
