import React from "react";
import { getAllSkills } from "../../proxyLayer/api-util";
import Image from "next/image";
import InterestSkillsCard from "../tiles/interestSkillsCard";

const SkillCard = ({ onClickSkills, skills }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex pt-16">
          <p className="m-auto text-[32px] font-semibold leading-[38px] font-[Raleway]">
            In-Demand Skills
          </p>
        </div>
        <div className="flex flex-col mx-[11%] gap-10 my-10">
          <div className="flex flex-row flex-wrap justify-between">
            {skills.map((element) => {
              return (
                <div
                  onClick={() => {
                    onClickSkills(element.name);
                  }}
                >
                  <InterestSkillsCard skill={element} />

                  {/* <div className="flex pl-3 gap-3">
                    <Image
                      src={element.image}
                      alt="img"
                      height={30}
                      width={30}
                    />

                    <div className="flex items-center">
                      <p className="text-[18px] pr-4 font-bold font['Raleway'] leading-[28px]">
                        {element.name}
                      </p>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
