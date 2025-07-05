"use client";

import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";

import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";

const Page = () => {
  useSmoothHashScroll(-100);

  return (
    <div className="default-layout">
      <header>
        <Header />
      </header>
      <Offset height={160} color={"brand-white"} />
      <div className={"text-black"}>Fields Coverage</div>
      <Footer />
    </div>
  );
};

export default Page;
