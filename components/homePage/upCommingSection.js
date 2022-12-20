import Link from "next/link";
import React, { Fragment } from "react";
import Spinner from "../spinner";

const UpCommingSection = ({ sessions }) => {
  if (!sessions) {
    return <Spinner />;
  }
  console.log(sessions, "=========");
  return (
    <Fragment>
      <div className="flex flex-col gap-6 mt-40">
        <div className="m-auto">
          <p className="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            Upcoming Sessions
          </p>
        </div>
        <div className="m-auto">
          <p className="text-[20px] font-medium leading-[23px] text-[#242424] font-['Raleway']">
            Sign Up to one of our sessions and start your journey
          </p>
        </div>
      </div>
      {/* <!-- Footer Cards --> */}
      <div className="mx-[4.44%] ">
        <div className="grid grid-cols-4  gap-[2.22%] my-[24px]  ">
          {sessions.map((seasion) => {
            return (
              <Fragment key={Math.random()}>
                <div
                  className="flex flex-col gap-4   bg-[#F4F4F4] rounded-[12px]
                "
                >
                  <div>
                    <img
                      src={seasion?.image}
                      alt="img"
                      className="w-full rounded-[12px] h-[204px] w-full"
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
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* <!-- Footer button --> */}
      <div className="flex my-16">
        `
        <div className="m-auto bg-[#F3F3F4] rounded-[7px]">
          <button className="text-[20px] font-medium text-[#1C2D56] leading-[24px] font-['Raleway'] px-5 py-1 hover:bg-[#1C2D56] hover:text-white">
            <Link href="/calender">Calender</Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default UpCommingSection;
