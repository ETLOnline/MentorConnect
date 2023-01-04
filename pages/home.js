import React, { useContext, useEffect, useState } from "react";
import InterestAndRecomendedSkills from "../components/tiles/interest&RecomendedSills";
import MyMentor from "../components/tiles/myMentor";
import RegisteredSession from "../components/tiles/registeredSession";
import { getSingleUser } from "../utils_firebase/users";
import { AuthContext } from "../contexts/auth_context";
import Spinner from "../components/spinner";
import UpCommingSection from "../components/homePage/upCommingSection";
import { getSessionByUserSkills } from "../utils_firebase/sessions";
import { useRouter } from "next/router";
import Image from "next/image";

const Home = () => {
  const { user } = useContext(AuthContext);
  // const [Interests, setInterest] = useState(null);
  const [RecommendedSession, setRecommendedSession] = useState();
  const [auth, setAuth] = useState();
  const router = useRouter();
  // console.log(user.user.uid, "homeeeeeeeeeeeeeeeeee");

  console.log(user.user, "userHome");

  useEffect(() => {
    // if (!user.authIsValide) {
    //   // router.push("/");
    //   return (
    //     <div className=" text-center  items-center  text-5xl pb-20 pt-20">
    //       <p> Firts login please</p>
    //     </div>
    //   );
    // }

    getSessionByUserSkills(user.user.interest).then((data) => {
      setRecommendedSession(data);
    });
  }, []);

  if (!RecommendedSession) {
    return (
      <div className=" text-center  items-center  text-5xl pb-20 pt-20">
        <p> Firts login please</p>
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
      <InterestAndRecomendedSkills Interests={user.user.interest} />

      <UpCommingSection
        sessions={RecommendedSession}
        title="Recommended Sessions"
        dis="Sign Up to one of our sessions and start your journey"
      />
    </>
  );
};
export default Home;
