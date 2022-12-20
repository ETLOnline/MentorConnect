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
              className="w-48 h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto">
                <img src="./img/React-icon 1.png" alt="img" />
                <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
                  {skills[0]}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className="w-48 h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto">
                <img src="./img/Vector.png" alt="img" />
                <img
                  src="./img/Vector (1).png"
                  alt=""
                  className="relative w-[10px] h-[22px] right-[20px] top-[8px]"
                />
                <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                  {skills[1]}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[2]);
              }}
              className="w-[299px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto">
                <img src="./img/Vector (2).png" alt="img" />
                <img
                  src="./img/Vector (3).png"
                  alt=""
                  className="relative w-[10px] h-[22px] right-[20px] top-[8px]"
                />
                <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                  {skills[2]}
                </p>
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
                <img
                  src="./img/logo-javascript 1.png"
                  alt=""
                  className="bg-[#FFF49F] rounded-[20px]"
                />
                <p className="text-[24px] font-bold font-['Raleway'] leading-[30.18px] mt-1">
                  {skills[4]}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[3]);
              }}
              className="w-[244px] h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto">
                <img src="./img/Vector (9).png" alt="" />
                <img
                  src="./img/Vector (6).png"
                  alt=""
                  className="relative h-[13px] w-[17.8] right-[22px] top-1"
                />
                <img
                  src="./img/Vector (7).png"
                  alt=""
                  className="relative w-[17.28px] h-[1.38px] top-5 right-[39px]"
                />
                <img
                  src="./img/Vector (8).png"
                  alt=""
                  className="relative w-[11.18px] h-[1.38px] top-[24.38px] right-[55px]"
                />
                <p className="text-[24px] font-bold font-['Raleway'] leading-[30.18px]">
                  {skills[3]}
                </p>
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
                <div className="flex m-auto">
                  <img src="./img/Vector (2).png" alt="img" />
                  <img
                    src="./img/Vector (3).png"
                    alt=""
                    className="relative w-[10px] h-[22px] right-[20px] top-[8px]"
                  />
                  <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                    {skills[2]}
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className="w-48 h-24 mr-10 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex m-auto ">
                <img src="./img/React-icon 1.png" alt="img" />
                <p className="text-[24px] font-bold font['Raleway'] leading-[28px]">
                  {skills[0]}
                </p>
              </div>
            </div>

            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className="w-48 h-24 border-[1px] border-[#1C2D56] rounded-[12px] flex items-center hover:border-none hover:shadow-lg "
            >
              <div className="flex m-auto">
                <img src="./img/Vector.png" alt="img" />
                <img
                  src="./img/Vector (1).png"
                  alt=""
                  className="relative w-[10px] h-[22px] right-[20px] top-[8px]"
                />
                <p className="text-[24px] font-bold font-['Raleway'] leading-[28px]">
                  {skills[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
