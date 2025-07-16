"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  dropname: string;
  subUrl?: {
    name: string;
    url: string;
  }[];
};

const DropMenu = ({ dropname, subUrl }: Props) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        onClick={() => setOpen(!open)}
        className="flex flex-row place-items-center items-baseline gap-1 whitespace-nowrap"
      >
        {dropname}
        <Image
          src="/assets/icons/droparrow.png"
          alt="Dropdown indicator"
          height={12}
          width={12}
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-md border border-gray-200 bg-gray-100 shadow-lg">
        <div className="">
          {subUrl?.map(({ name, url }) => (
            <Link key={name} href={url} passHref legacyBehavior>
              <DropdownMenuItem className="dropdown-tab">
                <a
                  className={cn(
                    pathname === url && "text-brand-100 font-extrabold",
                  )}
                >
                  {name}
                </a>
              </DropdownMenuItem>
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropMenu;
