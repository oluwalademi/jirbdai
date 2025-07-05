import React from "react";
import TopBar from "@/components/TopBar";

type NavItem = {
  name: string;
  url: string;
};

type Props = {
  item?: NavItem[];
  title?: string; // optional prop
  children?: React.ReactNode;
};
const SidebarSection = ({ item, title, children }: Props) => {
  return (
    <div
      className={
        "relative m-0 flex w-full min-w-[320px] flex-1 flex-col self-stretch md:w-[320px] md:flex-none"
      }
    >
      <TopBar titleHeader={title ?? "Section"} />
      <div className={"bg-section mb-32 flex-col"}>
        {item?.map((unit) => (
          <a
            href={unit.url}
            key={unit.name}
            className="w-full font-inter font-semibold text-toreabay"
          >
            <div className={"pb-2 pl-5 pt-3"}>{unit.name}</div>
            <div className={"w-full border-b-2 border-gray-400"}></div>
          </a>
        ))}
        <div>{children || ""}</div>
      </div>
    </div>
  );
};

export default SidebarSection;
