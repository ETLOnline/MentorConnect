import React from "react";
import About from "./about";
import Activity from "./activity";
import Rewards from "./rewards";
import Schdule from "./schdule";
import { useState } from "react";

const Index = () => {
  const [about, setabout] = useState(false);
  const [activity, setactivity] = useState(false);
  const [reward, setreward] = useState(false);
  const [schdule, setschdule] = useState(false);

  function abouthandler() {
    setabout(true);
    setactivity(false);
    setschdule(false);
    setreward(false);
  }
  function activityhandler() {
    setactivity(true);
    setabout(false);
    setschdule(false);
    setreward(false);
  }

  function rewardhandler() {
    setreward(true);
    setabout(false);
    setschdule(false);
    setactivity(false);
  }
  function schdulehandler() {
    setschdule(true);
    setreward(false);
    setabout(false);
    setactivity(false);
  }

  return (
    <div className="ml-auto">
      <button className="ml-4" onClick={abouthandler}>
        About
      </button>
      <button className="ml-4" onClick={activityhandler}>
        Activity
      </button>

      <button className="ml-4" onClick={rewardhandler}>
        Rewards
      </button>
      <button className="ml-4" onClick={schdulehandler}>
        My Schdules
      </button>

      <br />
      {about && <About />}
      {activity && <Activity />}
      {reward && <Rewards />}
      {schdule && <Schdule />}
    </div>
  );
};

export default Index;
