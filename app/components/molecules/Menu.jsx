import React from "react";
import { links } from "@/app/lib/data/links";
import PageLink from "../atoms/Link";
import { TfiClose } from "react-icons/tfi";
const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <div className='flex justify-start relative min-h-screen px-5 pr-3 bg-gray-600'>
      <div className='flex flex-col flex-1 gap-1 mt-4 overflow-hidden font-semibold text-white'>
        {links.map((link) => (
          <PageLink key={link.id} href={link.href} text={link.text} setShowMenu={setShowMenu} />
        ))}
      </div>
      <div>
        <TfiClose
          className='w-10 h-10 pl-2 mt-4 font-semibold text-white cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </div>
  );
};

export default Menu;
