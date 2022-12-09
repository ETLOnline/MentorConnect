import React from "react";
import LearningTile from "../tiles/learningTile";


const LearningBlock = ()=>{
    return (
        <>
        <div className="mt-[64px]">
            <div>
              <h1 className="text-[24px] leading-[24px] font-bold text-[#1C2D56] font-['Relaway'] mb-4" >
              Learning 
              </h1>
            </div>

            <div className="flex gap-[16px]">
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>
            <LearningTile/>


            </div>

        </div>

        </>
    )
}

export default LearningBlock;