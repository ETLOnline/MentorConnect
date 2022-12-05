import React from "react";

const IntroCard=()=>{
    return(
        <>
        <div className=" bg-white w-[81.25%] flex flex-col  m-auto justify-between rounded-[12px] shadow-lg border-[1px] ">
          <div className="w-[37.5%] mt-[40px] mx-auto ">
          <img src="/img/Image (7).png" className="rounded-[96%]"/>

          </div>
          <div className="w-[37%] h-[24px] mx-auto flex justify-between mb-8">
          <button><img src='/img/2ndPath.png'/></button>
          <p className="text-[12px] mt-[5px] leading-[14px] font-semibold text-[#646464]">Play My Video Message</p>

          </div>
          <div className="w-[84.61%] mx-auto flex justify-between mb-[32px]">
          <p className="text-[24px] leading-[28px] font-semibold">Elon Musk</p>
          <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">Follow</button>


          </div>
           <div className="flex flex-col gap-3">
           <div className="flex mx-auto w-[69.5%] justify-between">
            
            <p className="text-[32px] font-semibold leading-[38px] text-[#1C2D56] text-center">120</p>
            <p className="text-[32px] leading-[38px] font-semibold text-[#1C2D56] text-center">4000</p>
            </div>


            <div className="flex w-[70%] ml-[45px] justify-between">
            <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">Followers</p>
            <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">Points</p>
            
          </div>
           </div>
          
            

            
            

          <div className="w-[48.07%] flex mx-auto justify-between mb-[32px] mt-[40px]">
            <img src="/img/LinkedIn.png"/>
            <img src="/img/Discord.png"/>
            <img src="/img/Github.png"/>
            <img src="/img/Twitter (1).png"/>
          </div>


        </div>

        </>
    )
}
export default IntroCard;