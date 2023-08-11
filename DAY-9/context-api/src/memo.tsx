import React from "react";

function Message({ msg }: { msg: string }) {
  return <p>{msg}</p>;
}

export const MyMessage = React.memo(Message);
