import React from "react";
import CoachingTile from "../tiles/coachingTile";

const CoachingBlock = () => {
  return (
    <>
      <div className="mt-[64px]">
        <div>
          <h1 className="text-[24px] leading-[24px] font-bold text-[#1C2D56] font-['Relaway'] mb-4">
            Coaching
          </h1>
        </div>

        <div className="grid grid-cols-8 gap-[16px] mr-[37px]">
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
          <CoachingTile />
        </div>
      </div>
    </>
  );
};
export default CoachingBlock;
