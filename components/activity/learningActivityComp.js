import React from "react";
import LearningCard from "../tiles/learningCard";

const LearningActivityBlock = ()=>{
    return(
        <>
           <div className="mt-[64px]">
            <div className="mb-[32px]">
                <h1 className="text-[24px] leading-[28px] font-bold font-['Relaway'] text-[#1C2D56]">Learning</h1>
            </div>
            <div className="grid grid-cols-2">
                <LearningCard/>
                <LearningCard/>
                <LearningCard/>
                <LearningCard/>
            </div>
           </div>
        </>
    )
}

export default LearningActivityBlock;