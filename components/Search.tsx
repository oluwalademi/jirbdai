"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface SearchProps {
  onUserActive: (active: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onUserActive }) => {
  const [startedTyping, setStartedTyping] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startedTyping) {
      setStartedTyping(true);
      onUserActive(true); // ✅ notify parent
    }
  };

  const handleFocus = () => {
    if (!startedTyping) {
      onUserActive(true); // ✅ notify parent when clicked
    }
  };

  const handleBlur = () => {
    onUserActive(false);
  };
  return (
    <div className="w-full max-w-md">
      <div className="relative rounded-[32px] bg-[#2c526f]">
        <Input
          placeholder="Search JIRBDAI library"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="h-[52px] bg-[#2c526f] px-6 pr-10 text-white placeholder:text-white/40"
        />
        <Image
          src="/assets/images/search-pics.png"
          alt="Search"
          width={35}
          height={35}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Search;
