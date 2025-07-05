import React from "react";

type Props = {
  titleHeader: string;
};

const TopBar = ({ titleHeader }: Props) => {
  return (
    <div className="background-ash-100 flex w-full flex-row items-center gap-4 p-5">
      <div className="h-14 w-6 rounded-sm bg-toreabay" />
      <h2 className="font-inter text-xl font-extrabold text-black">
        {titleHeader}
      </h2>
    </div>
  );
};

export default TopBar;
