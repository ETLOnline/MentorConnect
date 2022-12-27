import React, { useContext, useEffect, useState } from "react";
import Header from "../components/homePage/header";
import FeatureMentor from "../components/homePage/featureMentor";
import InterestAndRecomendedSkills from "../components/tiles/interest&RecomendedSills";
import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/registeredSession";
import RecomendedSessions from "../components/tiles/RecomendedSessions";
import { getSingleUser } from "../utils_firebase/users";
import { AuthContext } from "../contexts/auth_context";
import Spinner from "../components/spinner";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [Interests, setInterest] = useState(null);
  // console.log(user.user.uid, "homeeeeeeeeeeeeeeeeee");
  useEffect(() => {
    getSingleUser(user.user.uid).then((data) => setInterest(data.interest));
  }, []);

  // console.log(Interests, "homeee");
  if (!Interests) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <FeatureMentor />
      <InterestAndRecomendedSkills Interests={Interests} />
      <MyMentor />
      <RegisteredSession />
      <RecomendedSessions Skills={Interests} />
    </>
  );
};
export default Home;
