"use client";

import React, { useState } from "react";
import Link from "next/link";
import Search from "@/components/Search";
// import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Subheader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "flex h-16 flex-row items-center justify-between gap-x-20 border-b-2 px-20 py-2 mol:gap-x-10 mol:px-10"
      }
    >
      <div className={"hidden px-2 md:flex"}>
        <ul className="flex flex-1 flex-row items-center gap-4 lg:gap-6">
          {navItems.slice(4, 9).map(({ url, name }) => (
            <li key={name} className="lg:p-1">
              <Link href={url} passHref legacyBehavior>
                <a
                  className={cn(
                    "lg:robotoflex-semibold-16 text-[0.8rem] text-ash font-semibold whitespace-nowrap hover:text-[#00C8FF]",
                    pathname === url && "text-[#00C8FF] font-extrabold",
                  )}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Dropdown Menu */}
      <div className={"hamburger flex px-2 md:hidden"}>
        <div
          className={cn("hamburger", open && "hamburger-active")}
          onClick={() => setOpen(!open)}
        >
          <span className={"nav-dash"}></span>
          <span className={"nav-dash"}></span>
          <span className={"nav-dash"}></span>
        </div>

        {open && (
          <nav className="sub-header-nav-link">
            <ul className="flex flex-1 flex-wrap items-center gap-6 ">
              {navItems.slice(4, 9).map(({ url, name }) => (
                <li key={name} className="lg:p-1">
                  <Link href={url} passHref legacyBehavior>
                    <a
                      className={cn(
                        "robotoflex-semibold-16 text-[1rem] lg:text-sm whitespace-nowrap hover:text-[#00C8FF]",
                        pathname === url && "text-[#00C8FF] font-extrabold",
                      )}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <Search />
    </div>
  );
};

export default Subheader;
