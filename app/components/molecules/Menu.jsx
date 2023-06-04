import React from "react";
import { links } from "@/app/lib/data/links";
import PageLink from "../atoms/Link";

const Menu = ({ setShowMenu }) => {
  return (
    <div className='flex justify-start relative min-h-screen px-5 bg-blue-900 w-[3/5]'>
      <div className='flex flex-col gap-4 overflow-hidden font-semibold '>
        {links.map((link) => (
          <PageLink key={link.id} href={link.href} text={link.text} setShowMenu={setShowMenu} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
