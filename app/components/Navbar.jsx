"use client";
import { useState } from "react";
import Menu from "./molecules/Menu";
import { links } from "@/app/lib/data/links";
import PageLink from "./atoms/Link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Logo from "./atoms/Logo";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex z-50 justify-center sticky inset-0 h-20 align-middle bg-gray-900'>
      <nav className='container flex justify-between py-4 align-middle md:px-3 lg:px-3'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex justify-around gap-2 font-semibold text-gray-500 '>
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
              <FiMenu className='w-10 h-10 pr-2 font-semibold text-gray-500 cursor-pointer' />
            ) : (
              <TfiClose className='hidden w-10 h-10 pr-2 font-semibold text-gray-500 cursor-pointer' />
            )}
          </div>
        </div>
        {showMenu && (
          <AnimatePresence>
            <motion.div
              key='modal'
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ delay: 0.2, type: "tween", stiffness: 100 }}
              className='absolute top-0 left-0 w-full min-h-screen md:hidden lg:hidden'>
              {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </div>
  );
};
