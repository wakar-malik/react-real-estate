import React from "react";
import buttonStyle from "./Button.module.css";

function Button(props) {
  const classes = `${buttonStyle.btn} ${props.className || ""}`;

  return (
    <button className={classes}>
      <a href="">{props.text}</a>
    </button>
  );
}

export default Button;
