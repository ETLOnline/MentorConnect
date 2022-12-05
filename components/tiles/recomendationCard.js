import React from "react";

const RecomendationCard = ()=>{

    return(
        <>
           <div className="w-full flex justify-between hover:translate-x-6">
            <div className="w-[52.9%] flex justify-between">
               <div className="w-[23.36%]">
                <img src="/img/Image (16).png" className="rounded-[8px]"/>
               </div>
               <div className="w-[69.15%] flex items-center">
                <p className="text-[20px] leading-[23px] text-[#3E3E43] font-semibold">Everything You Need To Know About Java</p>
               </div>
            </div>
            <div className="w-[5.55%]">
            <img src="/img/Group.png" className="w-[58.33%]"/>
            </div>
           </div>
        </>
    )
}

export default RecomendationCard;