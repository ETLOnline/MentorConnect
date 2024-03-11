import InterestSkillsCard from "../tiles/interestSkillsCard";

const SkillCard = ({ onClickSkills, skills, page }) => {
  skills = skills.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div>
      <div className="">
        <div className="flex justify-between pt-10">
          <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-text">
            {page == "home" && "In-Demand Skills"}
            {page == "pastSession" && "All Skills"}
          </h2>
        </div>

        <div className="my-8">
          <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4">
            {skills.map((element) => {
              return (
                <div key={element.name}>
                  <InterestSkillsCard skill={element} click={onClickSkills} />
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
