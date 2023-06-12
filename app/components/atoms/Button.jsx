import React from "react";

const Button = ({ type, className, text, disabled, children }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {text}
      {children}
    </button>
  );
};

export default Button;
