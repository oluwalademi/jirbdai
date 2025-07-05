"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function SubmitPaperSection() {
  // Row 1 images
  const row1Images = [
    "innovation-in-digital-tech.png",
    "big-data-analytics.png",
    "management-business-and-entre.png",
    "egovernment-ebusiness-ehealth.png",
  ];
  // Row 2 images
  const row2Images = [
    "students-success-wellbeing.png",
    "computing-information-communications.png",
    "information-systems-software.png",
    "graduate-employability.png",
  ];

  // Duplicate arrays for infinite scroll
  const row1AllImages = [...row1Images, ...row1Images];
  const row2AllImages = [...row2Images, ...row2Images];

  const [isSmallScreen, setIsSmallScreen] = useState(false); // same on SSR and CSR

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1300);
    };

    handleResize(); // Run once after mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll refs for infinite scroll
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Scroll reset handler only if small screen
  useEffect(() => {
    if (!isSmallScreen) return;

    function resetScroll(el: HTMLDivElement | null) {
      if (!el) return;
      function onScroll() {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      el.addEventListener("scroll", onScroll);
      return () => el.removeEventListener("scroll", onScroll);
    }

    const cleanupRow1 = resetScroll(row1Ref.current);
    const cleanupRow2 = resetScroll(row2Ref.current);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      cleanupRow1 && cleanupRow1();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      cleanupRow2 && cleanupRow2();
    };
  }, [isSmallScreen]);

  return (
    <section className="flex w-full flex-col items-center py-20">
      {/* Header Text */}
      <div className="flex w-full flex-col items-center gap-0 pb-5 text-center">
        <h2 className="font-inter text-sm font-extrabold text-black">
          Empowering your Publication Journey
        </h2>
        <h1 className="h1 leading-tight text-black">Submit Your Paper</h1>
      </div>

      {/* Paper Categories */}
      <div className="flex w-full flex-col gap-0 px-20">
        <div className="relative flex flex-col content-start justify-items-start gap-3 overflow-hidden bg-[#f0f0f0] px-[60px] py-[40px]">
          {/* Row 1 */}
          {isSmallScreen ? (
            <div
              ref={row1Ref}
              className="flex gap-5 overflow-x-auto scroll-smooth whitespace-nowrap"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {row1AllImages.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                />
              ))}
            </div>
          ) : (
            // Fixed images, no scroll, no duplication
            <div className="flex justify-center gap-5">
              {row1Images.map((src) => (
                <Image
                  key={src}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                />
              ))}
            </div>
          )}

          {/* Row 2 */}
          {isSmallScreen ? (
            <div
              ref={row2Ref}
              className="flex gap-5 overflow-x-auto scroll-smooth whitespace-nowrap"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {row2AllImages.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center gap-5">
              {row2Images.map((src) => (
                <Image
                  key={src}
                  src={`/assets/images/papertypes/${src}`}
                  alt={src}
                  width={258}
                  height={274}
                  className="flex aspect-[258/274] w-[258px] min-w-[235px] max-w-[258px] object-cover"
                  draggable={false}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full justify-end border-t border-[#797979] bg-[#e4e2e2] px-[60px] py-3">
          <a href={"/fields-coverage"}>
            <div className="cursor-pointer text-sm font-semibold text-[#2c86fc]">
              View all Fields Coverage --&gt;
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
