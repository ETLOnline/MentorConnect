import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getSessionInUserRegister } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
// import RegisteredSessionCard from "./registeredSessionCard";
import LearningCard from "./learningCard";

const RegisteredSession = () => {
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSessionInUserRegister(user.user.uid).then((data) => setSession(data));
  }, []);

  if (!session) {
    return <Spinner />;
  }
  return (
    <div className="px-6 lg:px-10">

      <h2 className="py-10 text-lg md:text-xl xl:text-3xl font-bold text-primary text-center">Registered Sessions</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session === "You are not register any Sessions"
          ? "You are not register any Sessions"
          : session.map((data) => {
            return (
              <Fragment key={Math.random()}>
                <LearningCard key={Math.random()} data={data} />
                {/* <RegisteredSessionCard data={data} /> */}
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default RegisteredSession;
