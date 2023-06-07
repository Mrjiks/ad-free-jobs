import React from "react";

const Button = ({ type, className, text, disabled }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
