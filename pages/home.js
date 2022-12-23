import React from "react";
import Header from "../components/homePage/header";
import FeatureMentor from "../components/homePage/featureMentor";
import InterestAndRecomendedSkills from "../components/tiles/interest&RecomendedSills";
import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/RegisteredSession";
import RecomendedSessions from "../components/tiles/RecomendedSessions";

const Home = () => {
  return (
    <>
      <Header />
      <FeatureMentor />
      <InterestAndRecomendedSkills />
      <MyMentor />
      <RegisteredSession />
      <RecomendedSessions />
    </>
  );
};
export default Home;
