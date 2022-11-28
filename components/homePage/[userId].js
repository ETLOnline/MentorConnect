import React, { Fragment } from "react";
import Header from "./header";
import FeatureMentor from "./featureMentor";
import FindMentor from "./findMentor";
import SkillCard from "./skillCard";
import UpCommingSection from "./upCommingSection";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <FeatureMentor />
      <FindMentor />
      <SkillCard />
      <UpCommingSection />
    </Fragment>
  );
};

export default HomePage;
