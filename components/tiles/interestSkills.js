import React, { Fragment } from "react";
import InterestSkillsCard from "./interestSkillsCard";

const InterestSkills = ({ skills, title, dis }) => {
  return (
    <div className="px-6 lg:px-10">
      <div className="py-10">
        <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-primary text-center capitalize">{title}</h2>
        <p className="text-center text-primary text-base capitalize">{dis}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {skills.map((skill) => (
            <Fragment key={Math.random()}>
              <InterestSkillsCard skill={skill} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InterestSkills;
