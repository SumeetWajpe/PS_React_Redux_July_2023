import React, { PropsWithChildren } from "react";

type ButtonProps = {
  classes?: string;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <>
      <button className={props.classes}>{props.children}</button>
    </>
  );
};

export default Button;
