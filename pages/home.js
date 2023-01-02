import React, { useContext, useEffect, useState } from "react";
import Header from "../components/homePage/header";
import FeatureMentor from "../components/homePage/featureMentor";
import InterestAndRecomendedSkills from "../components/tiles/interest&RecomendedSills";
import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/registeredSession";
import { getSingleUser } from "../utils_firebase/users";
import { AuthContext } from "../contexts/auth_context";
import Spinner from "../components/spinner";
import UpCommingSection from "../components/homePage/upCommingSection";
import { getSessionByUserSkills } from "../utils_firebase/sessions";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [Interests, setInterest] = useState(null);
  const [RecommendedSession, setRecommendedSession] = useState();
  // console.log(user.user.uid, "homeeeeeeeeeeeeeeeeee");
  useEffect(() => {
    getSingleUser(user.user.uid).then((userData) => {
      console.log(userData.interest, "????????????????????????????/");
      getSessionByUserSkills(userData.interest).then((data) => {
        setRecommendedSession(data);
        setInterest(userData.interest);
      });
    });
  }, []);

  if (!Interests) {
    return <Spinner />;
  }

  console.log(RecommendedSession, "RecommendedSession....");
  return (
    <>
      {/* <Header /> */}
      <RegisteredSession />
      <MyMentor />
      {/* <FeatureMentor /> */}
      <InterestAndRecomendedSkills Interests={Interests} />

      <UpCommingSection
        sessions={RecommendedSession}
        title="Recommended Sessions"
        dis="Sign Up to one of our sessions and start your journey"
      />
    </>
  );
};
export default Home;
