import React from "react";
import Image from "next/image";

type Props = {
  srcLabel: string;
  heading: string;
  description: string;
};

const ArticleTypeButton = ({ srcLabel, heading, description }: Props) => {
  return (
    <div className={"flex flex-row gap-4"}>
      <div className={"flex size-[200px] shrink-0 border border-ash/50"}>
        <Image
          src={`/assets/images/papertypes/${srcLabel}`}
          alt={`${heading}`}
          width={200}
          height={200}
          className={"object-cover"}
        />
      </div>
      <div className={"flex flex-col gap-2 pt-2"}>
        <h4 className={""}>{heading}</h4>
        <div className={""}>{description}</div>
      </div>
    </div>
  );
};

export default ArticleTypeButton;
