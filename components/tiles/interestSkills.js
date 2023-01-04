import React, { Fragment } from "react";
import InterestSkillsCard from "./interestSkillsCard";

const InterestSkills = ({ Interests }) => {
  const index = 3;
  return (
    <>
      <div className="flex flex-col gap-3 pt-16">
        <p className="m-auto text-[32px] font-semibold leading-[38px] font-[Raleway]">
          Interested Skills
        </p>
        <p className="m-auto text-[20px] font-medium leading-[23px] text-[#242424]">
          Skills in which you are interested
        </p>
      </div>
      <div className="my-[64px] flex flex-col  gap-10">
        <div className="flex  justify-evenly flex-wrap mx-[210px]  gap-3">
          {Interests.map((Interests) => (
            <Fragment key={Math.random()}>
              <InterestSkillsCard Interests={Interests} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default InterestSkills;
