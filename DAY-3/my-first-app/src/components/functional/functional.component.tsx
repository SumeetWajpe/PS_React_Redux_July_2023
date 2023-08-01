// export function MessageFunctional() {
//   return <h2>Hello !</h2>;
// }

import React from "react";

// export let MessageFunctional = function () {
//   return <h2>Hello !</h2>;
// };

type MessageProps = {
  message: string;
};

export let MessageFunctional: React.FC<MessageProps> = (
  props: MessageProps,
) => {
  return <h2>{props.message}</h2>;
};
