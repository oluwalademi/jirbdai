import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={"h-12"} />
      <footer className="flex flex-row items-center justify-between border-t border-black px-16 py-10">
        {/* Left: Text container */}
        <div className="flex flex-1 flex-col gap-1">
          <div className="text-left font-robotoflex text-base font-semibold text-[#4d4d4f]">
            Journal of Institutional Research, Big Data Analytics and
            Innovation. Copyright © 2025 JIRBDAI.
          </div>
          <div className="text-left font-robotoflex text-base font-semibold text-[#4d4d4f]">
            Terms of Usage | Privacy Policy | Code of Ethics
          </div>
        </div>

        {/* Right: Icon container */}
        <div className="flex flex-1 justify-end">
          <div className="flex aspect-square size-24 items-center justify-center rounded-[8px] bg-brand p-1">
            <Image
              src="/assets/images/jirbdai-icon.png"
              alt="JIRBDAI Icon"
              width={95}
              height={95}
              className="object-cover"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
