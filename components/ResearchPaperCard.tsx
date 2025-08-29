"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  id: string;
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
  id,
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
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/doi/${id}`);
  };

  return (
    <a
      onClick={handleClick}
      className="research-card-template flex cursor-pointer flex-col border-2 border-black/25"
    >
      {/* Header Section */}
      <div className="w-full justify-start p-0">
        <div className={"flex w-full flex-row justify-between"}>
          <div>
            <div className="text-[16px] font-semibold uppercase leading-[14px] text-black">
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
        <div className="text-[18px] font-semibold text-curiousblue">
          {title}
        </div>
      </div>

      {/* Author Section */}
      <div className="flex w-full flex-row justify-between gap-x-2 gap-y-1 !px-2 py-1 ">
        <div className={"flex w-full flex-row flex-wrap gap-x-2 gap-y-1"}>
          {authors.slice(0, 3).map((author, i) => (
            <div
              key={i}
              className="flex w-fit flex-row items-center gap-x-2 text-nowrap font-inter text-sm  font-semibold text-black"
            >
              <Image
                src={authorIcon}
                alt="Date"
                width={6}
                height={6}
                className={"size-7 object-contain"}
              />
              <div className={"w-fit"}>
                {author}
                {i < authors.length - 1 ? "," : ""}
              </div>
            </div>
          ))}
          {/* If showAll is true, list the rest */}
          {showAll &&
            authors.slice(3).map((author, i) => (
              <div
                key={i + 3}
                className="flex flex-row items-center gap-x-2 text-nowrap font-inter text-sm font-semibold text-black"
              >
                <Image
                  src={authorIcon}
                  alt="Author"
                  width={6}
                  height={6}
                  className="size-7 object-contain"
                />
                {author}
                {i + 3 >= authors.length - 1 && showAll ? "" : ","}
              </div>
            ))}
        </div>

        {authors.length > 3 && (
          <div
            onClick={() => setShowAll(!showAll)}
            className={
              "ml-3 h-fit cursor-pointer text-nowrap rounded-[8px] border-2 bg-gray-300 p-1 text-sm text-black"
            }
          >
            {showAll ? "show less" : `show ${authors.length - 2} more`}
          </div>
        )}
      </div>
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
          <div className="text-sm">{`Pages ${pages}`}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">{doi}</div>
          <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
        </div>
      </div>
      <div className="line-clamp-4 min-h-[6em] font-medium">
        {description || "no description"}
      </div>
    </a>
  );
};

export default ResearchPaperCard;
