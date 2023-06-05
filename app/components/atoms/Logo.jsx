import React from "react";
import { BsBagFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className='flex flex-1 pl-2 align-middle'>
      <BsBagFill className='w-10 h-10 pb-2 font-semibold text-blue-500 cursor-pointer' />
      <p className='py-2 text-blue-500'>myJob</p>
    </div>
  );
};

export default Logo;
