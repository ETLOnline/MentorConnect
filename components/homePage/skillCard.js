import React from "react";
import { getAllSkills } from "../../proxyLayer/api-util";
import Image from "next/image";

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
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />
                {/* <img
                  src="./img/Image (28).png"
                  className="w-[30px]"
                  alt="img"
                /> */}

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className=" h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex  pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[28px]">
                    {skills[1]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[2]);
              }}
              className="h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (24).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[28px]">
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
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg">
              <div className="flex pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />
                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[30.18px] mt-1">
                    {skills[4]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[3]);
              }}
              className="h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[30.18px]">
                    {skills[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                onClickSkills(skills[0]);
              }}
              className=" h-[60px] shadow-lg border-[1px] rounded-[8px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex gap-10 ">
              <div
                onClick={() => {
                  onClickSkills(skills[2]);
                }}
                className="h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg "
              >
                <div className="flex pl-3 m-auto gap-3">
                  <Image
                    src="/img/Image (24).png"
                    alt="img"
                    height={30}
                    width={30}
                  />

                  <div className="flex items-center">
                    <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[28px]">
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
              className="h-[60px] shadow-lg mr-10 border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg"
            >
              <div className="flex pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (28).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                    {skills[0]}
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                onClickSkills(skills[1]);
              }}
              className="h-[60px] shadow-lg border-[1px]  rounded-[12px] flex items-center hover:border-none hover:shadow-lg "
            >
              <div className="flex pl-3 m-auto gap-3">
                <Image
                  src="/img/Image (23).png"
                  alt="img"
                  height={30}
                  width={30}
                />

                <div className="flex items-center">
                  <p className="text-[18px] pr-4 font-bold font-['Raleway'] leading-[28px]">
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
