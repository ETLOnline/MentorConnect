import React from "react";
import CoachingCard from "../tiles/coachingCard";

const CoachingActivityBlock = () => {
  return (
    <>
      <div className="mt-[80px]">
        <div className="mb-[38px]">
          <h1 className="text-[#1C2D56] text-[24px] font-bold leading-[28px]">
            Coaching
          </h1>
        </div>
        <div className="grid grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <CoachingCard />
          <CoachingCard />
          <CoachingCard />
          <CoachingCard />
        </div>
      </div>
    </>
  );
};

export default CoachingActivityBlock;
