import React from "react";
import RecomendedSessionsCard from "./RecomendedSectionCard";

const RecomendedSessions = () => {
  return (
    <>
      <div class="flex flex-col gap-6 mt-40">
        <div class="m-auto">
          <p class="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            Recomended Sessions
          </p>
        </div>
        <div class="m-auto">
          <p class="text-[20px] font-medium leading-[23px] text-[#242424] font-['Raleway']">
            Register sessions and start your journey
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8  m-[64px]">
        <RecomendedSessionsCard />
        <RecomendedSessionsCard />
        <RecomendedSessionsCard />
        <RecomendedSessionsCard />
      </div>
    </>
  );
};

export default RecomendedSessions;
