import React from "react";
import { BsBagFill } from "react-icons/bs";
import Logo from "./atoms/Logo";
const Footer = () => {
  return (
    <div className='flex justify-between bottom-0 w-full h-40 pt-10 align-middle bg-gray-900 md:px-10 md:justify-between md:flex-row lg:flex-row 2xl:flex-row lg:justify-between'>
      <Logo />
      <p className='px-2 mt-4'>Features coming soon</p>
    </div>
  );
};

export default Footer;
