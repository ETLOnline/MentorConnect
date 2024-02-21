import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
import SessionItem from "./upCommingSessionItem";

const UpCommingSection = ({ sessions, title, dis }) => {
  if (!sessions) {
    return <Spinner />;
  }

  return (
    <Fragment>

      <div className="py-10">
        <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-primary text-center">{title}</h2>
        <p className="text-center text-primary text-base">{dis}</p>
      </div>

      <div className="mx-[16px] xs:mx-[32px] ">
        <div>
          <div className="flex flex-wrap justify-center  gap-[2.22%] my-[24px]  ">
            {sessions.length === 0
              ? "We have no Recommended sessions for you"
              : sessions.map((session) => {
                return (
                  <Fragment key={Math.random()}>
                    <SessionItem session={session} />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>

      {/* <!-- Footer button --> */}
      {/* <div className="flex my-16">
        <div className="m-auto bg-[#F3F3F4] rounded-[7px]">
          <button className="text-[20px] font-medium text-[#1C2D56] leading-[24px] font-['Raleway'] px-5 py-1 hover:bg-[#1C2D56] hover:text-white">
            <Link href="/calender">Calender</Link>
          </button>
        </div>
      </div> */}
    </Fragment>
  );
};

export default UpCommingSection;
