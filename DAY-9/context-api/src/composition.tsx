import React from "react";

const Button = (props: any) => {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};

export default Button;
