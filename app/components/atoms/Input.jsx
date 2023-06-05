"use client";
import React from "react";

const Input = ({ className, type, placeholder, autoFocus, onChange }) => {
  return (
    <div className='flex flex-col w-full gap-3 md:flex-row'>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
