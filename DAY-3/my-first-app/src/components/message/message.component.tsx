import React from "react";
import { MessageProps } from "../../props/message.props";



export class Message extends React.Component<MessageProps> {
  render(): React.ReactNode {
    // called for every Message component instance
    console.log("Within Message Render method !");
    return (
      <>
        <h2>{this.props.messageDetails.message}</h2>
        <h3>From : {this.props.messageDetails.from}</h3>
        <h3>To : {this.props.messageDetails.to}</h3>
      </>
    );
  }
}