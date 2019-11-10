import * as React from "react";

interface ButtonProps {
  id: string;
  title: string;
  clickHandler?: () => void;
  pressed: boolean;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const buttonClasses = ["btn", props.pressed ? "btn-outline-danger" : "btn-outline-light"];

  return (
    <button id={props.id} className={buttonClasses.join(" ")} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  pressed: false,
};
