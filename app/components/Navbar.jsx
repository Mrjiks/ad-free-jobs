"use client";
import { useState } from "react";
import Menu from "./molecules/Menu";
import { links } from "@/app/lib/data/links";
import PageLink from "./atoms/Link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

import Link from "next/link";
import Logo from "./atoms/Logo";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='z-50 sticky inset-0 bg-black md:bg-gray-600'>
      <nav className='container flex justify-between sticky inset-0 py-10 mb-2 md:justify-between md:px-8 lg:px-20'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex justify-around gap-2 font-semibold'>
            {links.map((link) => (
              <PageLink
                key={link.id}
                href={link.href}
                text={link.text}
                setShowMenu={setShowMenu}
                active={link.active}
              />
            ))}
          </ul>
        </div>
        <div className='md:hidden lg:hidden '>
          <div onClick={() => setShowMenu((preState) => !preState)}>
            {!showMenu ? (
              <FiMenu className='w-10 h-10 pr-2 font-semibold text-white cursor-pointer' />
            ) : (
              <TfiClose className='w-10 h-10 pr-2 font-semibold text-white cursor-pointer' />
            )}
          </div>
        </div>
        {showMenu && (
          <div className='absolute top-0 left-0 w-full min-h-screen md:hidden lg:hidden'>
            {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
          </div>
        )}
      </nav>
    </div>
  );
};
