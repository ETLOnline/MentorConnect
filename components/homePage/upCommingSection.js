import Link from "next/link";
import React, { Fragment } from "react";
import Spinner from "../spinner";
import SessionItem from "./upCommingSessionItem";

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
                <SessionItem seasion={seasion} />
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
