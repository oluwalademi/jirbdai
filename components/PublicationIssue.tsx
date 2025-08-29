import React from "react";
import Image from "next/image";
import SubTopBar from "@/components/SubTopBar";
import Offset from "@/components/header/Offset";
import Link from "next/link";

type Props = {
  link?: string;
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
  link = "",
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
    <Link href={link}>
      <div
        className={`flex flex-1 shrink-0 flex-col gap-2 border-0 border-brand-100 hover:border-[6px] hover:shadow-custom-2 ${
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
    </Link>
  );
};

export default PublicationIssue;
