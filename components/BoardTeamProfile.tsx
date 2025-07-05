import React from "react";

type Props = {
  name: string;
  img: string;
  university: string;
  country: string;
};

const BoardTeamProfile = ({ name, img, university, country }: Props) => {
  return (
    <>
      <div className="flex w-full min-w-[350px] flex-1 items-center justify-start gap-5 px-3 pb-6 pt-3">
        {/* Stroke border wrapper */}
        <div className="flex items-center justify-start rounded-full border-4 border-ash">
          <div className="flex items-center justify-start rounded-full border-2 border-gray-300">
            <div className="flex items-center justify-center overflow-hidden rounded-full">
              <img
                src={
                  img === null || img === undefined || img === ""
                    ? "/assets/images/no-user-pics.svg"
                    : `/assets/images/board-profile/${img}`
                }
                alt={`${name}'s image`}
                className="aspect-square size-[85px] shrink-0 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text container */}
        <div className="flex w-full flex-col items-start justify-center gap-2 self-stretch py-3">
          <div className="flex font-inter text-[1.125rem] font-bold leading-7 text-curiousblue">
            {name}
          </div>
          <div className="flex self-stretch font-inter text-[1rem] font-bold leading-7 text-ash">
            {university}
          </div>
          <div className="font-inter text-[0.875rem] font-normal leading-7 text-black">
            {country}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardTeamProfile;
