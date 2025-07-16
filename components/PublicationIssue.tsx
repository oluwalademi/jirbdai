import React from "react";
import Image from "next/image";
import SubTopBar from "@/components/SubTopBar";
import Offset from "@/components/header/Offset";

type Props = {
  title: string;
  imgSrc: string;
  description: string;
  date: string;
  defaultTextClr?: string;
  tnyColor?: string;
  longColor?: string;
  txtColor?: string;
};

const PublicationIssue = ({
  title,
  imgSrc,
  description,
  date,
  defaultTextClr,
  tnyColor,
  longColor,
  txtColor,
}: Props) => {
  return (
    <div
      className={`flex min-w-[395px] flex-1 flex-col gap-2 ${
        defaultTextClr ? `${defaultTextClr}` : "text-black"
      }`}
    >
      <SubTopBar
        titleHeader={title}
        tinyColor={tnyColor}
        bigColor={longColor}
        textColor={txtColor}
      />
      <Offset height={10} />
      <div className={"w-full"}>
        <Image
          src={`/assets/images/issue-directory/${imgSrc}`}
          alt={imgSrc.toString()}
          width={200}
          height={200}
          className={"w-full"}
        />
      </div>
      <div>
        <div className={"w-full pl-5 font-roboto text-lg font-extrabold"}>
          {description}
        </div>
        <div className={"w-full pl-5 "}>{date}</div>
      </div>
    </div>
  );
};

export default PublicationIssue;
