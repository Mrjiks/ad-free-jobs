import React, { useState } from "react";
import Link from "next/link";

const PageLink = ({ href, setShowMenu, text, active }) => {
  const [activeLink, setActive] = useState(active);
  return (
    <Link
      href={href}
      onClick={() =>
        setShowMenu((preState) => {
          !preState;
        })
      }
      className={
        activeLink
          ? "p-1 cursor-pointer hover:text-red-300 border-b-4"
          : "p-1 cursor-pointer hover:text-red-300 hover:border-b-4"
      }>
      {text}
    </Link>
  );
};

export default PageLink;
