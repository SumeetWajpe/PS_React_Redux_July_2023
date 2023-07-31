import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message, MessageModel } from "../message/message.component";

class App extends React.Component {
  render(): React.ReactNode {
    let messageOne:MessageModel = { message: "Hello", from: "John", to: "Kim" };

    return (
      <div className="App">
        <header>
          <h1>All Messages</h1>
        </header>
        <main>
          <Message messageDetails={messageOne} />
        </main>
      </div>
    );
  }
}

export default App;
