import React, { Fragment, useEffect, useState } from "react";
import Header from "./header";
import FeatureMentor from "./featureMentor";
import FindMentor from "./findMentor";
import SkillCard from "./skillCard";
import UpCommingSection from "./upCommingSection";
import {
  filterSessionByTag,
  getAllSessions,
} from "../../utils_firebase/sessions";
import Link from "next/link";

const HomePage = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    async function name() {
      const seasion = await getAllSessions();
      console.log(seasion, ">>>>>>>>>>><<<LLLLLLLLKKKKKKKKKKK");
      setSessions(seasion);
    }
    name();
  }, []);
  const onClickSkills = (ele) => {
    // console.log(ele);

    filterSessionByTag(ele).then((data) => {
      setSessions(data);
    });
  };

  return (
    <Fragment>
      <Header />
      <FeatureMentor />
      <FindMentor />
      <SkillCard onClickSkills={onClickSkills} />
      {sessions.length > 0 ? (
        <div>
          <UpCommingSection
            sessions={sessions}
            title="Upcomming Session"
            dis=" Sign Up to one of our sessions and start your journey"
          />
        </div>
      ) : (
        <h2 className="flex justify-center text-[50px]">
          No Upcoming Sessions On this Skill
        </h2>
      )}
    </Fragment>
  );
};

export default HomePage;
