import React from "react";

const IntrestsTile = ({ data }) => {
  return (
    <>
      <div className="xl:w-[94%] lg:w-[80.5%] md:w-[79.8%] sm:w-[45%] w-[45%]  h-auto bg-[#1C2D56] rounded-[17.5px] flex justify-center">
        <p className="  font-medium text-white my-[6px] mx-[24px] ">{data}</p>
      </div>
    </>
  );
};

export default IntrestsTile;
