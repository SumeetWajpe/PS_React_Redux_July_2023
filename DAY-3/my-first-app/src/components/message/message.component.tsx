import React from "react";
import { MessageProps } from "../../props/message.props";
import "./message.style.css";

export class Message extends React.Component<MessageProps> {
  render(): React.ReactNode {
    // called for every Message component instance
    console.log("Within Message Render method !");
    return (
      <div className="msg-card">
        <img
          src={this.props.messageDetails.imageUrl}
          height="150px"
          width="200px"
          alt=""
        />
        <h2>{this.props.messageDetails.message}</h2>
        <h3>From : {this.props.messageDetails.from}</h3>
        <h3>To : {this.props.messageDetails.to}</h3>
      </div>
    );
  }
}
