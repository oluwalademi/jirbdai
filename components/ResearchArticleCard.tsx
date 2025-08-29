import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  title: string;
  authors: string[];
  date: string;
  articleNo: string;
  pages: string;
  doi: string;
  authorIcon: string;
};

const ResearchArticleCard: React.FC<Props> = ({
  link,
  title,
  authors,
  date,
  articleNo,
  pages,
  doi,
  authorIcon,
}) => {
  const dotIcon = "/assets/images/dot.svg";

  return (
    <Link href={`/doi/${link}`}>
      <div className="article-card-template">
        {/* Header Section */}
        <div className="justify-start p-0">
          <div className="h2-text pb-1 text-[16px] font-bold uppercase leading-[14px] text-black">
            Research Article
          </div>
          <div className="h2-text pb-2 text-[14px] font-light uppercase leading-5 text-limeade">
            Free Content
          </div>
          <div className="article-title h3-text text-[18px] font-semibold text-curiousblue">
            {title}
          </div>
        </div>

        {/* Author Section */}
        <div className="author-container container  flex !min-h-[138px] w-full flex-col gap-x-4 gap-y-2">
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
            <a href={""}>
              <div
                className={
                  "text-nowrap rounded-[8px] border-2 bg-gray-300 px-2 py-1 text-sm text-black"
                }
              >
                +{authors.length - 2} more{" "}
              </div>
            </a>
          )}
        </div>
        <div className={"h-1/5"}></div>
        {/* Details Section */}
        <div className="flex flex-row flex-wrap items-start justify-start gap-x-2 gap-y-4 p-1 text-ash">
          <div className="detailed-sub-container flex items-center gap-2">
            <div className="h3-text text-sm">{date}</div>
            <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
          </div>
          <div className="detailed-sub-container flex items-center gap-2">
            <div className="h3-text text-sm">{articleNo}</div>
            <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
          </div>
          <div className="detailed-sub-container flex items-center gap-2">
            <div className="h3-text text-sm">{pages}</div>
            <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
          </div>
          <div className="detailed-sub-container flex items-center gap-2">
            <div className="h3-text text-sm">{doi}</div>
            <img className="dotImg size-3" src={dotIcon} alt="dot Icon" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResearchArticleCard;
