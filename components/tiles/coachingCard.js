import React from "react";

const CoachingCard = ()=>{
    return(
        <>
         <div className="w-[100%] h-auto rounded-[12px] flex group hover:bg-[#F4F4F4]">
          <div className="flex w-[82.93%] gap-4 ml-[12px] my-[12px]">
          <div className="w-[31.8%] h-[96px]  my-auto ">
            <img src="/img/Image (21).png" className="w-full h-[96px]" />
          </div>

          <div className="w-[76.93%] flex flex-col gap-4 my-auto">
          
          <div className="flex flex-col gap-1">
          <div className=" h-[14px]">
            <p className="text-[12px] leading-[14px] font-medium text-[#8B8B8B] group-hover:text-green-800">6/11/2022 - 3PM</p>
            </div>
            <div className=" h-[30px]">
                <p className="xl:text-[24px] lg:text-[20px] md:text-[15px] leading-[28px] font-medium text-[#000000] group-hover:text-[#1C2D56]">Making Billionare</p>
            </div>
          </div>
           
            <div className="w-[65%] h-auto flex gap-2">
            <img src="/img/Ellipse 15.png"  className="w-[16%]"/>

            <p className="text-[16px] leading-[19px] font-medium text-[#8B8B8B] group-hover:text-[#1C2D56]">-Me</p>

            </div>

          </div>
          </div>
        

          </div>
        </>
    )
}
export default CoachingCard;