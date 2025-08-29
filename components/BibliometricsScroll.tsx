// app/components/BibliometricsScroll.tsx (Client Component)
"use client";

import Image from "next/image";
import React, { useRef } from "react";

interface Metric {
  label: string;
  value: string;
  bg: string;
}

export default function BibliometricsScroll({
  metrics,
}: {
  metrics: Metric[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="relative flex w-full flex-row items-center justify-items-start overflow-x-hidden p-0">
      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="absolute inset-y-0 left-5 content-center bg-ash bg-opacity-80 lg:hidden"
      >
        <Image
          src="/assets/images/direction.png"
          alt="direction"
          width={28}
          height={28}
          className="rotate-180"
        />
      </button>

      <button
        onClick={scrollRight}
        className="absolute inset-y-0 right-0 content-center bg-ash bg-opacity-80 lg:hidden"
      >
        <Image
          src="/assets/images/direction.png"
          alt="direction"
          width={28}
          height={28}
        />
      </button>

      {/* Vertical Label */}
      <div className="flex h-[155px] w-[20px] items-center justify-center bg-black">
        <div className="-rotate-90 whitespace-nowrap text-xs font-bold text-white">
          Bibliometrics
        </div>
      </div>

      {/* Scrollable metrics */}
      <div
        ref={scrollRef}
        className="scrollbar-hidden flex w-full flex-row items-center justify-items-start overflow-x-auto"
      >
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
}
