import React from "react";

const Footer= ()=>{
    return(
        <>
        <div className="w-full h-[254px] flex flex-col bg-[#1C2D56]">
        <div className="w-full h-[81.88%]  flex">
        <div className="w-[24.44%]">
            <div className="w-[63.63%] h-[30.76%] bg-[#E6E5E5]  my-[72px] mx-auto  flex justify-center"><p className="text-[16px] leading-[18px] text-[#1C2D56] m-auto">Logo</p></div>
        </div>
        <div className="w-[56.12%] flex ">
        <div className="w-[11.13%]"></div>

        <div className="w-[68.31%] flex justify-between">
            <div className="text-[20px] leading-[23px] font-medium text-center text-[#FFFFFF] m-auto      ">Find a Mentor</div>
            <div className="text-[20px] leading-[23px] font-medium text-center text-[#FFFFFF] m-auto      ">About Us</div>
            <div className="text-[20px] leading-[23px] font-medium text-center text-[#FFFFFF] m-auto      ">Pricing</div>
            <div className="text-[20px] leading-[23px] font-medium text-center text-[#FFFFFF] m-auto      ">Become a Member</div>
        </div>
        <div className="w-[20.54%]"></div>

            
        </div>
        <div className="w-[19.44%]">
            <div className="w-[54.88%] flex justify-between mx-auto my-[89px]">
                <img src="/img/LinKedIn (2).png"/>
                <img src="/img/Facebook (1).png"/>
                <img src="/img/Instagram (1).png"/>
                <img src="/img/Twitter (3).png"/>
            </div>
        </div>

        </div>
        <div className="w-full h-[18.11%] ">
        <div className="w-[91.11%] border-t-[1px] border-[white] mx-auto flex justify-between pt-2">
        <p className="text-[12px] leading-[14px] font-light text-white">@2022 TheLearningDao. All Rights Reserved</p>
        <div className="flex ">
            <p className="text-[12px] leading-[14px] font-medium text-white mr-4">Terms & Conditions</p>
            <p className="text-[12px] leading-[14px] font-medium text-white">Privacy Policy</p>
        </div>

        </div>


        </div>
        </div>
       

        </>
    )
}
export default Footer;