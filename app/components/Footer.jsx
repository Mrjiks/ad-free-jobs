import React from "react";
import Logo from "./atoms/Logo";
const Footer = () => {
  return (
    <div className='flex z-50 justify-center bottom-0 py-2 align-middle bg-gray-900 h-15 md:h-20 lg:h-20 md:py-6 lg:py-6'>
      <div className='container flex justify-between py-4 align-middle md:px-10 lg:px-20'>
        <Logo />
        <p className='px-2 text-teal-600'>More features coming soon</p>
      </div>
    </div>
  );
};

export default Footer;
