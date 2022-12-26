import React from "react";

const ReviewsCard = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-[#F4F4F4] flex flex-col rounded-[12px]">
        <div className="flex justify-between mx-4 mt-4">
          <div className="w-[40.2%] flex gap-2 items-center">
            <div className="w-[15.61%]">
              <img src="/img/Image (22).png" className="object-cover " />
            </div>

            <p className=" w-[79.73%] overflow-hidden text-[87.5%] flex leading-[16px] font-bold text-center text-[#1C2D56]">
              Everything Design
            </p>
          </div>
          <div className="w-[31.27%] flex gap-[9.33px] h-[70.3%]">
            <img src="/img/Star 1 (Stroke).png" className="w-[12.225%]   " />
            <img src="/img/Star 1 (Stroke).png" className="w-[12.225%] " />
            <img src="/img/Star 1 (Stroke).png" className="w-[12.225%] " />
            <img src="/img/Star 1 (Stroke).png" className="w-[12.225%] " />
            <img src="/img/Star 1 (Stroke).png" className="w-[12.225%] " />
          </div>
        </div>
        <div className="text-[112.5%] leading[23px] font-medium text-[#000000] w-[84.13%] h-auto mt-[24px]   mr-[40px] ml-[26px]">
          “I learnt so much about design in this session, I totally reccomend
          this to everyone.”
        </div>

        <div className="flex justify-between mx-[26px] mt-[24px] mb-4 ">
          <div className="text-[100%] leading-[19px] font-semibold ">-Me</div>
          <div className="text-[100%] leading-[19px] font-medium text-[#8B8B8B]">
            5th Nov 2022
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewsCard;
