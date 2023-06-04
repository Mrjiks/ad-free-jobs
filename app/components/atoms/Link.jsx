import React from "react";
import Link from "next/link";

const PageLink = ({ href, setShowMenu, text }) => {
  return (
    <Link
      href={href}
      onClick={() => setShowMenu((preState) => !preState)}
      className='cursor-pointer'>
      {text}
    </Link>
  );
};

export default PageLink;
