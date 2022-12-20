import Link from "next/link";
import React, { useEffect } from "react";
const SessionItem = ({ seasion }) => {
  const { id } = seasion;
  console.log(id, "upCommingSessionItem");

  return (
    <>
      <Link href={`/session/${id}`}>
        <div
          className="flex flex-col gap-4   bg-[#F4F4F4] rounded-[12px]
                "
        >
          <div>
            <img
              src={seasion?.image}
              alt="img"
              className="w-full rounded-[20px] h-[204px] w-full"
            />
          </div>
          <div className="flex flex-col  mx-3">
            <div className="flex flex-row mb-3 justify-between">
              <p className="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
                {seasion?.students.length} +Attendees
              </p>
              <p className="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
                {/* {seasion?.startTime} */}
              </p>
            </div>
            <div className=" mb-4">
              <p className="text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
                {seasion?.title}
              </p>
            </div>
            <div className="flex pb-2 gap-2 mb-4">
              <img
                src={seasion?.instructor?.summry?.image}
                alt=""
                className="rounded-[50px] w-[10.52%]"
              />
              <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                {seasion?.instructor?.summry?.displayName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SessionItem;
