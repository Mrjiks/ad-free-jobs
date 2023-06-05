import React from "react";
import { BsBagFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className='flex flex-1 align-middle'>
      <BsBagFill className='w-10 h-10 pb-2 font-semibold text-white cursor-pointer' />
      <p className='py-2 text-red-200'>myJob</p>
    </div>
  );
};

export default Logo;
