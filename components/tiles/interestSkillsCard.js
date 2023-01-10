import React from "react";
import Image from "next/image";

const InterestSkillsCard = ({ skill }) => {
  return (
    <>
      <div className="min-w-[21.53%] mb-[15px] rounded-[12px] flex items-center  shadow-md gap-2 px-2">
        <div className="flex w-[42px] h-[42px] m-2 ">
          <Image
            src={skill.image}
            alt="img"
            height={42}
            width={42}
            className="m-auto"
          />
        </div>
        <div className="flex">
          <p className="text-[24px] font-bold text-[#1C2D56] font['Raleway'] leading-[28px]">
            {skill.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default InterestSkillsCard;
