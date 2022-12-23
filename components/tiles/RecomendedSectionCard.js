import React from "react";

const RecomendedSessionsCard = () => {
  return (
    <>
      <div class="flex flex-col gap-3 bg-[#F4F4F4] rounded-[12px]">
        <img src="/img/Image (10).png" alt="" />
        <div class="flex flex-col gap-3 mx-3">
          <div class="flex flex-row justify-between">
            <p class="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
              200+Attendees
            </p>
            <p class="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
              6/11/2022-3PM
            </p>
          </div>
          <div class="">
            <p class="text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
              Everything Design
            </p>
          </div>
          <div class="flex pb-2 gap-2">
            <img src="/img/Ellipse 15.png" alt="" class="rounded-[12px]" />
            <p class="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
              James Dean
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecomendedSessionsCard;
