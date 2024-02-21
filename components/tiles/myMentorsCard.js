import React from "react";
import Image from "next/image";
import SessionTile from "./sessionTile";

const MyMentorsCard = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] px-6 py-4 rounded-xl">
        <div className="border-b-[0.5px] border-black">
          <div className="flex">
            <div className="w-[75%] ">
              <p className="font-bold text-[#1C2D56] ">Alya S.</p>
              <p className="text-[grey] capitalize line-clamp-2 text-sm ">Top-rated marketing expert</p>
            </div>
            <div className="w-[25%] flex justify-end">
              <span className="h-12 w-12 rounded-full overflow-hidden" >
                <Image
                  src="/img/Image (7).png"
                  alt=""
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </span>
            </div>
          </div>
          <div className="py-4">
            <SessionTile Mentorship="Mentorship" dollar="$150" month="/month" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <SessionTile Mentorship="Intro Session" dollar="$100" />
          <SessionTile Mentorship="React Mastery" dollar="$39" />
          <SessionTile Mentorship="Graphic Designing" dollar="$60" />
        </div>
      </div>
    </>
  );
};

export default MyMentorsCard;
