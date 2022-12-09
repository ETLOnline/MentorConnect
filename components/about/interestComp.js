import React from "react";
import IntrestsTile from "../tiles/intrestsTile";

const InterestsBlock = ()=>{
    return(
        <>
        <div className="mt-[64px]">
            <div>
            <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56] mb-4">Interests</h1>
            </div>
           <div className="flex gap-[16px]"> 

           <IntrestsTile/>
            <IntrestsTile/>
            <IntrestsTile/>
            <IntrestsTile/>
            <IntrestsTile/>
            <IntrestsTile/>
            </div>


        </div>

        </>
    )
}
export default InterestsBlock;