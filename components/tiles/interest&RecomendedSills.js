import React, { Fragment } from "react";
import InterestAndRecomendedSkillsCard from "./interest&RecomendedSkillsCard";

const InterestAndRecomendedSkills = ({ Interests }) => {
  return (
    <>
      <div className="flex pt-16">
        <p className="m-auto text-[32px] font-semibold leading-[38px] font-[Raleway]">
          Interested&Recomended-SKills
        </p>
      </div>
      <div className="m-[64px] flex flex-col gap-10">
        <div className="flex justify-evenly">
          {Interests.map((Interests) => (
            <Fragment key={Math.random()}>
              <InterestAndRecomendedSkillsCard Interests={Interests} />
            </Fragment>
          ))}

          {/* <InterestAndRecomendedSkillsCard /> */}
          {/* <InterestAndRecomendedSkillsCard /> */}
        </div>
        <div className="flex justify-evenly">
          {/* <InterestAndRecomendedSkillsCard /> */}
          {/* <InterestAndRecomendedSkillsCard /> */}
        </div>
        <div className="flex justify-around">
          {/* <InterestAndRecomendedSkillsCard />
          <InterestAndRecomendedSkillsCard />
          <InterestAndRecomendedSkillsCard /> */}
        </div>
      </div>
    </>
  );
};
export default InterestAndRecomendedSkills;
