import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "../message/message.component";
import { MessageModel } from "../../models/message.model";

class App extends React.Component {
  render(): React.ReactNode {
    let messages: MessageModel[] = [
      {
        message: "Hello",
        from: "John",
        to: "Kim",
        imageUrl:
          "https://img.freepik.com/free-vector/hello-wording-comic-speech-bubble-pop-art-style_1150-39959.jpg?w=2000",
      },
      {
        message: "Hey",
        from: "John",
        to: "Kim",
        imageUrl:
          "https://i.scdn.co/image/ab6761610000e5eb7931715a93cf050c888145a3",
      },
      {
        message: "Hola",
        from: "John",
        to: "Kim",
        imageUrl:
          "https://img.freepik.com/premium-vector/hola-hi-phrase-lettering-isolated-white-colourful-text-effect-design-vector-text-inscriptions-english-modern-creative-design-has-red-orange-yellow-colors_7280-7768.jpg?w=2000",
      },
      {
        message: "By",
        from: "John",
        to: "Kim",
        imageUrl:
          "https://thumbs.dreamstime.com/b/neon-sign-good-bye-speech-bubble-frame-dark-background-neon-sign-good-bye-speech-bubble-frame-dark-background-light-151416182.jpg",
      },
    ];

    return (
      <div className="App">
        <header>
          <h1>All Messages</h1>
        </header>
        <main>
          {messages.map(msg => (
            <Message messageDetails={msg} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
