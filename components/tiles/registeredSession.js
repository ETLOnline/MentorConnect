import React from "react";
import RegisteredSessionCard from "./RegisteredSessionCard";

const RegisteredSession = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mt-40">
        <div className="m-auto">
          <p className="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            Registered Sessions
          </p>
        </div>
        <div className="m-auto">
          <p className="text-[20px] font-medium leading-[23px] text-[#242424] font-['Raleway']">
            Sessions that you have Registered
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 m-[64px]">
        <RegisteredSessionCard />
        <RegisteredSessionCard />
        <RegisteredSessionCard />
        <RegisteredSessionCard />
        <RegisteredSessionCard />
        <RegisteredSessionCard />
      </div>
    </>
  );
};
export default RegisteredSession;
