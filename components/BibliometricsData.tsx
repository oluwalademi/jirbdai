"use client";

import React, { useRef } from "react";
import Image from "next/image";

const BibliometricsData = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const metrics = [
    { label: "Publication Years", value: "2022 - 2025", bg: "bg-gray-500" },
    { label: "Publication Count", value: "85", bg: "bg-[#6e227d]" },
    { label: "Available for Download", value: "200", bg: "bg-[#0d6601]" },
    { label: "Downloads (cumulative)", value: "20", bg: "bg-[#8d3c3c]" },
    { label: "Downloads (6 weeks)", value: "20", bg: "bg-[#8d673c]" },
    { label: "Downloads (year)", value: "47", bg: "bg-[#5d1c1c]" },
    { label: "Average Citations per Article", value: "5", bg: "bg-[#483c8d]" },
    { label: "Average Downloads per Article", value: "53", bg: "bg-[#3c8d8d]" },
  ];

  return (
    <section className="relative flex w-full flex-row items-center justify-items-start overflow-x-hidden p-0">
      <button
        onClick={scrollLeft}
        className={
          "absolute inset-y-0 left-5 content-center bg-ash bg-opacity-80  lg:hidden"
        }
      >
        <Image
          src={"/assets/images/direction.png"}
          alt={"direction"}
          width={"28"}
          height={"28"}
          className={"rotate-180"}
        />
      </button>
      <button
        onClick={scrollRight}
        className={
          "absolute inset-y-0 right-0 content-center bg-ash bg-opacity-80  lg:hidden"
        }
      >
        <Image
          src={"/assets/images/direction.png"}
          alt={"direction"}
          width={"28"}
          height={"28"}
        />
      </button>
      {/* Vertical "Bibliometrics" Label */}
      <div className="flex h-[155px] w-[20px] items-center justify-center bg-black">
        <div className="-rotate-90 whitespace-nowrap text-xs font-bold text-white">
          Bibliometrics
        </div>
      </div>

      <div
        ref={scrollRef}
        className={
          "scrollbar-hidden flex w-full flex-row items-center justify-items-start overflow-x-auto"
        }
      >
        {/* Stats Blocks */}
        {metrics.map((item, i) => (
          <div
            key={i}
            className={`flex size-[155px] shrink-0 flex-col place-content-center items-center text-white lg:flex-1 ${item.bg}`}
          >
            <div className="px-1 text-center text-xs font-bold leading-tight">
              {item.label}
            </div>
            <div className="mt-2 font-numans text-lg">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BibliometricsData;
