import React from "react";
import CoachingCard from "../tiles/coachingCard";
import LearningCard from "../tiles/learningCard";

const SchduleDetailBlock = ()=>{
    return(
        <>
        <div className="border-b-[1px] border-b-[#DADADA] mb-[32px]">
            <div className="mb-[36px]">
                <h1 className="text-[24px] leading-[28px] font-semibold">Monday 21<sup>st</sup></h1>
            </div>
            <div className="grid grid-cols-2 gap-[36px] mb-[40px]">
                <LearningCard/>
                <LearningCard/>
                <CoachingCard/>
            </div>
        </div>

        </>
    )
}
export default SchduleDetailBlock;