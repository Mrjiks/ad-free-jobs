"use client";
import { useState } from "react";
import Menu from "./molecules/Menu";
import { links } from "@/app/lib/data/links";
import PageLink from "./atoms/Link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { BsBagFill } from "react-icons/bs";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='container flex justify-center sticky inset-0 px-5 py-10 mx-auto mb-2 md:justify-between md:px-8 lg:px-20'>
      <div className='flex flex-1 align-middle'>
        <BsBagFill className='w-10 h-10 pb-2 font-semibold text-white cursor-pointer' />
        <p className='py-2 text-red-200'>myJob</p>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex justify-around gap-4 font-semibold'>
          {links.map((link) => (
            <PageLink key={link.id} href={link.href} text={link.text} setShowMenu={setShowMenu} />
          ))}
        </ul>
      </div>
      <div className='md:hidden lg:hidden '>
        <div onClick={() => setShowMenu((preState) => !preState)}>
          {!showMenu ? (
            <FiMenu className='w-10 h-10 font-semibold text-white cursor-pointer' />
          ) : (
            <TfiClose className='w-10 h-10 font-semibold text-white cursor-pointer' />
          )}
        </div>
      </div>
      {showMenu && (
        <div className='absolute left-0 w-full min-h-screen md:hidden lg:hidden top-10'>
          {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
        </div>
      )}
    </nav>
  );
};
