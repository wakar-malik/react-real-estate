import React from "react";
import "./Button.css";

function Button(props) {
  const classes = `btn ${props.className || ""}`;

  return (
    <button className={classes}>
      <a href="">{props.text}</a>
    </button>
  );
}

export default Button;
