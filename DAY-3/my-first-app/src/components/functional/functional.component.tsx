// export function MessageFunctional() {
//   return <h2>Hello !</h2>;
// }

import React from "react";
import { MessageModel } from "../../models/message.model";

// export let MessageFunctional = function () {
//   return <h2>Hello !</h2>;
// };

type MessageProps = {
  messagedetails: MessageModel;
};

export let MessageFunctional: React.FC<MessageProps> = (
  props: MessageProps,
) => {
  return (
    <>
      <h2>{props.messagedetails.message}</h2>
      <h3>{props.messagedetails.from}</h3>
      <h3>{props.messagedetails.to}</h3>
    </>
  );
};
