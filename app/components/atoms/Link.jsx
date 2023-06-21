"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const PageLink = ({ href, setShowMenu, text }) => {
  // Show active link
  const pathname = usePathname();
  let isActive = false;

  if (pathname === href) {
    isActive = true;
  }
  return (
    <Link
      href={href}
      onClick={() =>
        setShowMenu((preState) => {
          !preState;
        })
      }
      className={clsx(
        "p-1 cursor-pointer  hover:text-white hover:border-b-4",
        isActive && "bg-teal-900 text-white rounded-sm border-1 "
      )}>
      {text}
    </Link>
  );
};

export default PageLink;
