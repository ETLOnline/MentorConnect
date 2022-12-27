import React from "react";
import { getAllSkills } from "../../proxyLayer/api-util";

const SkillCard = ({ onClickSkills }) => {
  const [Skills] = getAllSkills();
  const { skills } = Skills;
  // console.log(skills);

  return (
    <div>
      <div className="bg-white">
        <div className="flex pt-16">
          <p className="m-auto text-[32px] font-semibold leading-[38px] font-[Raleway]">
            In-Demand Skills
          </p>
        </div>
        <div className="flex flex-col mx-[11%] gap-10 my-10">
          <div className="flex flex-row  justify-between">
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className="w-[191px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (28).png" alt="img" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className="w-[205px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (23).png" alt="img" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                    {skills[1]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[2]);
              }}
              className="w-[299px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (24).png" alt="img" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                    {skills[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              onClickSkills(skills[4]);
            }}
            className="flex flex-row justify-evenly"
          >
            <div className="w-[244px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg">
              <div className="flex m-auto gap-3">
                <img src="./img/Image (26).png" alt="" />
                <div className="flex items-center">
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[30.18px] mt-1">
                    {skills[4]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[3]);
              }}
              className="w-[244px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (25).png" alt="" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[30.18px]">
                    {skills[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:flex gap-10 ">
              <div
                onClick={() => {
                  onClickSkills(skills[2]);
                }}
                className="w-[299px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg "
              >
                <div className="flex m-auto gap-3">
                  <img src="./img/Image (24).png" alt="img" />

                  <div className="flex items-center">
                    <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                      {skills[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className="w-[191px] h-24 mr-10 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (28).png" alt="img" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className="w-[205px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg "
            >
              <div className="flex m-auto gap-3">
                <img src="./img/Image (23).png" alt="img" />

                <div className="flex items-center">
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                    {skills[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
