import InterestSkillsCard from "../tiles/interestSkillsCard";

const SkillCard = ({ onClickSkills, skills, page }) => {
  // console.log(skills.sort((a, b) => (a.name > b.name ? 1 : -1)));
  skills = skills.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div>
      <div className="bg-white">
        <div className="flex ml-[32px] pt-[32px]">
          <p className=" text-[32px] font-semibold leading-[38px] font-[Raleway]">
            {page == "home" && "In-Demand Skills"}
            {page == "pastSession" && "All Skills"}
          </p>
        </div>
        <div className=" mx-[11%] my-[32px]">
          <div className="flex flex-row flex-wrap justify-between">
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
