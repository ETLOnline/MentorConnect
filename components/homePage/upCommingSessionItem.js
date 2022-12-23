import Link from "next/link";
import React, { useEffect } from "react";
const SessionItem = ({ seasion }) => {
  const { id } = seasion;
  console.log(id, "upCommingSessionItem");

  return (
    <>
      <Link href={`/session/${id}`} className="w-[23.2%]">
        <div
          className="flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px]
                "
        >
          <div>
            <img
              src={seasion?.image}
              alt="img"
              className="w-full rounded-[20px] h-[206px]  w-full object-cover"
            />
          </div>
          <div className="flex flex-col  mx-3">
            <div className="flex flex-row mb-3 justify-between">
              <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
                {seasion?.students.length} +Attendees
              </p>
              <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
                {/* {seasion?.startTime} */}
              </p>
            </div>
            <div className=" mb-4 h-[4vh] overflow-y-clip">
              <p className="text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
                {seasion?.title}
              </p>
            </div>
            <div className="flex  gap-2 mb-4 h-[4.2vh]">
              <img
                src={seasion?.instructor?.summry?.image}
                alt=""
                className="rounded-[50px] w-[10.52%] object-cover"
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
