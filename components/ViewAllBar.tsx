"use client";

import React from "react";

type Props = {
  justify: string;
  inputText: string;
  href?: string;
};

const ViewAllBar = ({ justify, inputText, href }: Props) => {
  return (
    <div
      className={`${justify} flex w-full items-end border-t border-[#797979] bg-[#e4e2e2] px-[60px] py-3`}
      style={{ alignSelf: "stretch" }}
    >
      <div className="text-lg font-semibold text-[#2c86fc]">
        <a href={href}>{inputText} --&gt;</a>
      </div>
    </div>
  );
};

export default ViewAllBar;
