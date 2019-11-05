import * as React from "react";

interface ButtonProps {
  id: string;
  title: string;
  clickHandler?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button id={props.id} className="btn btn-outline-light" onClick={props.clickHandler}>
      {props.title}
    </button>
  );
};
