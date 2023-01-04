import React from "react";
import Image from "next/image";

const InterestSkillsCard = ({ Interests }) => {
  // console.log(Interests, "interesttttSkillscard");

  return (
    <>
      {/* <div className="min-w-[21.3%]  border-[1px]  rounded-[12px] flex items-center border-none shadow-lg gap-1">
        <div className="flex  max-w-[42px] ">
          <img src="./img/Image (28).png" alt="img" className="w-full m-auto" />
        </div>
        <div className="flex flex-col gap-2 self-start w-[70%] mt-5">
          <div className="flex">
            <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
              {Interests}
            </p>
          </div>
          <div className="flex   mr-[5px]">
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
      </div> */}
      <div className="min-w-[21.53%] rounded-[12px] flex items-center  shadow-md border-t-2 border-[#1C2D56] gap-2 px-2">
        <div className="flex  max-w-[42px] m-2 ">
          <Image
            src="/img/Image (28).png "
            alt="img"
            height={42}
            width={42}
            className="m-auto"
          />
          {/* <img src="./img/Image (28).png" alt="img" className="w-full m-auto" /> */}
        </div>
        <div className="flex">
          <p className="text-[24px] font-bold text-[#1C2D56] font['Raleway'] leading-[28px]">
            {Interests}
          </p>
        </div>
      </div>
    </>
  );
};

export default InterestSkillsCard;
