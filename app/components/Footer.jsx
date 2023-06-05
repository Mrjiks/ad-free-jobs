import React from "react";
import { BsBagFill } from "react-icons/bs";
import Logo from "./atoms/Logo";
const Footer = () => {
  return (
    <div className='flex justify-between px-24 align-middle'>
      <Logo />
      <p className='flex-1'>Coming Soon</p>
    </div>
  );
};

export default Footer;
