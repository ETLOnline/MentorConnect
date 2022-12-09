import React from "react";
import BadgesCircle from "../tiles/badgesCircle";


const BadgesBlock = ()=>{
    return(
        <>
        <div className="mt-[64px]">
            <div>
            <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56] mb-4">Interests</h1>
            </div>
           <div className="flex gap-[16px]"> 

           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
           <BadgesCircle/>
            </div>


        </div>

        </>
    )
}
export default BadgesBlock;