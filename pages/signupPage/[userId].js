import React from "react";
import About from "./about";
import Activity from "./activity";
import Rewards from "./rewards";
import Schdule from "./schdule";
import { useState } from "react";
import IntroCard from "../../components/tiles/introCard";
import IntrestsTile from "../../components/tiles/intrestsTile";
import LearningTile from "../../components/tiles/learningTile";
import BadgesCircle from "../../components/tiles/badgesCircle";
import RecomendationCard from "../../components/tiles/recomendationCard";
import LearningCard from "../../components/tiles/learningCard";
import CoachingCard from "../../components/tiles/coachingCard";
import ReviewsCard from "../../components/tiles/reviewsCard";
import FeedbackCard from "../../components/tiles/feedbackCard";
import SkillRating from "../../components/tiles/skillRating";
import SkillRating2 from "../../components/tiles/skillRating2";

const Index = () => {
  const [about, setabout] = useState(true);
  const [activity, setactivity] = useState(false);
  const [reward, setreward] = useState(false);
  const [schdule, setschdule] = useState(false);

  function abouthandler() {
    console.log("about");
    setabout(true);
    setactivity(false);
    setschdule(false);
    setreward(false);
  }
  function activityhandler() {
    console.log("Activity");

    setactivity(true);
    setabout(false);
    setschdule(false);
    setreward(false);
  }

  function rewardhandler() {
    console.log("RewardsHandler");

    setreward(true);
    setabout(false);
    setschdule(false);
    setactivity(false);
  }
  function schdulehandler() {
    console.log("schdulehandler");

    setschdule(true);
    setreward(false);
    setabout(false);
    setactivity(false);
  }

  return (
    <>
      <div className="relative">
        <img src="/img/Frame 83.png" className="w-full" />
        <div className="fixed bottom-0  w-[37.20%]">
          <IntroCard />
        </div>
      </div>

      <div className="flex w-full ">
        <div className="w-[95.56%] flex flex-col">
          <div className="w-full h-[87px] flex border-b-[1px] border-[#1C2D56]">
            <div className=" w-[37.20%]"></div>
            <div className=" flex justify-between h-[87px] w-[62.8%] items-end">
              <button
                className="w-[19.44%] py-0 px-[5.55%] focus:border-b-[2px] focus:border-[#1C2D56]  h-[73.56%] flex items-center text-[24px] focus:text-[#1C2D56] font-normal leading-[28px] font-['Raleway'] text-center"
                onClick={abouthandler}
              >
                About
              </button>

              <button
                className="w-[19.44%] focus:border-b-[2px] py-0 px-[4.51%] focus:border-[#1C2D56]  h-[73.56%] flex items-center text-[24px] focus:text-[#1C2D56] font-normal leading-[28px] font-['Raleway']"
                onClick={activityhandler}
              >
                Activity
              </button>

              <button
                className="w-[19.44%] py-0 px-[4.51%x] focus:border-b-[2px] focus:border-[#1C2D56]  h-[73.56%] flex items-center text-[24px] focus:text-[#1C2D56] font-normal leading-[28px] font-['Raleway']"
                onClick={rewardhandler}
              >
                Rewards
              </button>
              <button
                className="w-[19.44%] py-0  focus:border-b-[2px] focus:border-[#1C2D56]  h-[73.56%] flex items-center text-[24px] focus:text-[#1C2D56] font-normal leading-[28px] font-['Raleway']"
                onClick={schdulehandler}
              >
                My Schdule
              </button>
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-[37.20%]"></div>
            <div className="w-[62.8%]">
              {about && <About />}
              {activity && <Activity />}
              {reward && <Rewards />}
              {schdule && <Schdule />}
              {/* <br></br>
              <IntrestsTile />
              <br></br>
              <LearningTile />
              <br></br>
              <BadgesCircle />
              <br></br>
              <RecomendationCard />
              <br></br>
              <LearningCard />
              <br></br>
              <CoachingCard />
              <br></br>
              <ReviewsCard />
              <br></br>
              <FeedbackCard />
              <br></br>
              <SkillRating />
              <br></br>
              <SkillRating2 /> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
