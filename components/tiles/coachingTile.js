import React from "react";

const CoachingTile = ({ data }) => {
  return (
    <>
      <div className="xl:w-[91.75%]  lg:w-[99%] md:w-[87.5%] w-[37.65%] h-auto rounded-[12px] border-[#1C2D56] border-[1px] flex">
        <p className="text-[#1C2D56] text-[16px] leading-[19px] font-medium my-[7.5px] mx-[24px]">
          {data}
        </p>
      </div>
    </>
  );
};
export default CoachingTile;
