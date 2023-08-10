import React from "react";

const Button = (props: any) => {
  return (
    <>
      <button className={props.classes}>{props.children}</button>
    </>
  );
};

export default Button;
