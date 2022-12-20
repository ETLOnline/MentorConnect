import React, { Fragment, useEffect, useState } from "react";
import Header from "./header";
import FeatureMentor from "./featureMentor";
import FindMentor from "./findMentor";
import SkillCard from "./skillCard";
import UpCommingSection from "./upCommingSection";
import {
  filterSessionByTag,
  getAllSessions,
  getSessionById,
} from "../../utils_firebase/sessions";

const HomePage = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    async function name() {
      console.log(await getSessionById(), "LKJKJKJKJKJKJK");
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
        <UpCommingSection sessions={sessions} />
      ) : (
        <h2>No Upcoming Sessions On this Skill</h2>
      )}
    </Fragment>
  );
};

export default HomePage;
