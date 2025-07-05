"use client";

import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  authors: string[];
  date: string;
  articleNo: string;
  pages: string;
  doi: string;
  authorIcon: string;
  description?: string;
};

const ResearchPaperCard: React.FC<Props> = ({
  title,
  authors,
  date,
  articleNo,
  pages,
  doi,
  authorIcon,
  description,
}) => {
  const dotIcon = "/assets/images/dot.svg";

  return (
    <div className="research-card-template flex flex-col">
      {/* Header Section */}
      <div className="w-full justify-start p-0">
        <div className={"flex w-full flex-row justify-between"}>
          <div>
            <div className="text-[16px] font-bold uppercase leading-[14px] text-black">
              Research Article
            </div>
            <div className="pb-1 text-[14px] font-light uppercase leading-5 text-limeade">
              Free Content
            </div>
          </div>
          <div>
            <Image
              src={"/assets/images/jirbdai-small.svg"}
              alt={"JIRBDAI icon"}
              width={110}
              height={20}
            />
          </div>
        </div>
        <div className="text-[18px] font-medium text-curiousblue">{title}</div>
      </div>

      {/* Author Section */}
      <div className="container flex w-full flex-row gap-x-4 gap-y-1 py-1">
        {authors.slice(0, 3).map((author, i) => (
          <div
            key={i}
            className="flex flex-row items-center gap-x-4 font-inter text-sm font-semibold text-black"
          >
            <Image
              src={authorIcon}
              alt="Date"
              width={6}
              height={6}
              className={"size-7 object-contain"}
            />
            {author} ,
          </div>
        ))}

        {authors.length > 2 && (
          <div
            className={
              "text-nowrap rounded-[8px] border-2 bg-gray-300 p-1 text-sm text-black"
            }
          >
            +{authors.length - 2} more{" "}
          </div>
        )}
      </div>
      <div className={"h-1/5"}></div>
      {/* Details Section */}
      <div className="flex flex-row flex-wrap items-start justify-start gap-x-2 gap-y-4 p-1 text-ash">
        <div className="flex items-center gap-2">
          <div className="text-sm">{date}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">{articleNo}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">{pages}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">{doi}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
      </div>
      <div className="line-clamp-4 min-h-[6em]">
        {description || "no description"}
      </div>
    </div>
  );
};

export default ResearchPaperCard;
