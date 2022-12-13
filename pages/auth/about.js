import React from "react";
import IntrestsTile from "../../components/tiles/intrestsTile";
import LearningCard from "../../components/tiles/learningCard";
import CoachingCard from "../../components/tiles/coachingCard";
import AboutBlock from "../../components/about/aboutComp";
import InterestsBlock from "../../components/about/interestComp";
import LearningBlock from "../../components/about/learningComp";
import CoachingBlock from "../../components/about/coachingComp";
import BadgesBlock from "../../components/about/badgesComp";
import MyRecomendationBlock from "../../components/about/myRecomendationComp";


const About = () => {
  return (

    <>
      <AboutBlock></AboutBlock>
      <InterestsBlock></InterestsBlock>
      <LearningBlock></LearningBlock>
      <CoachingBlock></CoachingBlock>
      <BadgesBlock></BadgesBlock>
      <MyRecomendationBlock></MyRecomendationBlock>
    </>
    
  );
};

export default About;
