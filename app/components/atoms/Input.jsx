import React from "react";

const Input = ({ className, type, placeholder }) => {
  return (
    <div className='flex flex-col w-full gap-3 md:flex-row'>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;
