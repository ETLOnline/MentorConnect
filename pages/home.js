import React, { useContext, useEffect, useState } from "react";

import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/registeredSession";
import { getSingleUser } from "../utils_firebase/users";
import { AuthContext } from "../contexts/auth_context";
import Spinner from "../components/spinner";
import UpCommingSection from "../components/homePage/upCommingSection";
import { getSessionByUserSkills } from "../utils_firebase/sessions";
import InterestSkills from "../components/tiles/interestSkills";
import RecomendedSkills from "../components/tiles/recomendedSkills";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [RecommendedSession, setRecommendedSession] = useState();
  console.log(user, "userHome");

  const generalSkills = ["HTML", "CSS"];
  console.log(user.user, "userHome...");

  useEffect(() => {
    // if (!user.authIsValide) {
    //   // router.push("/");
    //   return (
    //     <div className=" text-center  items-center  text-5xl pb-20 pt-20">
    //       <p> Firts login please</p>
    //     </div>
    //   );
    // }

    getSessionByUserSkills(
      user.user.interest.length === 0 ? generalSkills : user.user.interest
    ).then((data) => {
      setRecommendedSession(data);
    });
  }, []);

  if (!RecommendedSession) {
    return (
      <div className=" text-center  items-center  text-5xl pb-20 pt-20">
        <p>Loading.... </p>
      </div>
    );
  }

  console.log(RecommendedSession, "RecommendedSession....");
  return (
    <>
      {/* <Header /> */}
      <RegisteredSession />
      <MyMentor />
      {/* <FeatureMentor /> */}
      <InterestSkills
        Interests={
          user.user.interest.length === 0 ? generalSkills : user.user.interest
        }
      />
      <RecomendedSkills
        Interests={
          user.user.interest.length === 0 ? generalSkills : user.user.interest
        }
      />

      <UpCommingSection
        sessions={RecommendedSession}
        title="Recommended Sessions"
        dis="Sign Up to one of our sessions and start your journey"
      />
    </>
  );
};
export default Home;
