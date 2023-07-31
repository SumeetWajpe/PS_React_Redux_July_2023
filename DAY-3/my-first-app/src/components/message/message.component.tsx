import React from "react";
import { MessageProps } from "../../props/message.props";

export class Message extends React.Component<MessageProps> {
  render(): React.ReactNode {
    // called for every Message component instance
    console.log("Within Message Render method !");
    return (
      <div className="col-md-3">
        <img
          src={this.props.messageDetails.imageUrl}
          height="150px"
          width="200px"
          className="card-img-top"
          alt={this.props.messageDetails.message}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.messageDetails.message}</h5>
          <p className="card-text">From : {this.props.messageDetails.from}</p>
          <p className="card-text">To : {this.props.messageDetails.to}</p>
        </div>
      </div>
    );
  }
}
