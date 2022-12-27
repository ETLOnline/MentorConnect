import React from "react";

const InterestAndRecomendedSkillsCard = ({ Interests }) => {
  // console.log(Interests, "interesttttSkillscard");

  return (
    <>
      <div className="w-[90%] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg gap-1">
        <div className="flex  w-[30%] ">
          <img
            src="./img/Image (28).png"
            alt="img"
            className="w-[72%] m-auto"
          />
        </div>
        <div className="flex flex-col gap-2 self-start w-[70%] mt-5">
          <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
            {Interests}
          </p>
          <div className="flex  gap-1 mr-[5px]">
            <div className="flex gap-[5px]">
              <div className="w-[20px]">
                <img src="/img/like.png" alt="" className="mt-[4px]" />
              </div>
              <p className="text-gray-500">Recomended</p>
            </div>

            <div className="flex gap-[5px]">
              <div className="w-[20px]">
                <img src="/img/Path (1).svg" alt="" className="mt-[5px]" />
              </div>
              <p className="text-gray-500">Interested</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestAndRecomendedSkillsCard;
