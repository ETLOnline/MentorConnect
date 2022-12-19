import React from "react";
import CoachingTile from "../tiles/coachingTile";

const CoachingBlock = ({ data }) => {
  return (
    <>
      <div className="mt-[64px]">
        <div>
          <h1 className="text-[24px] leading-[24px] font-bold text-[#1C2D56] font-['Relaway'] mb-4">
            Coaching
          </h1>
        </div>

        <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4  gap-[16px] mr-[37px]">
          {data
            ? data?.map((elemant) => (
                <CoachingTile key={elemant} data={elemant} />
              ))
            : "Please Update Profile"}
        </div>
      </div>
    </>
  );
};
export default CoachingBlock;
