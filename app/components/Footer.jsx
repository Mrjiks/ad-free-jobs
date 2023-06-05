import React from "react";
import { BsBagFill } from "react-icons/bs";
import Logo from "./atoms/Logo";
const Footer = () => {
  return (
    <div className='flex flex-col justify-center bottom-0 w-full h-48 px-24 pt-10 align-middle bg-gray-900 md:justify-between md:flex-row lg:flex-row 2xl:flex-row lg:justify-between'>
      <Logo />
      <p className='flex-1 '>Coming Soon</p>
    </div>
  );
};

export default Footer;
