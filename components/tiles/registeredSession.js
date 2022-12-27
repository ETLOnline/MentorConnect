import { data } from "jquery";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getSessionInUserRegister } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
import RegisteredSessionCard from "./registeredSessionCard";

const RegisteredSession = () => {
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState(null);
  // console.log(user.user.uid, "RegisteredSession");

  useEffect(() => {
    getSessionInUserRegister(user.user.uid).then((data) => setSession(data));
  }, []);

  console.log(session, "RegisteredSession........");

  if (!session) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col gap-6 mt-40">
        <div className="m-auto">
          <p className="text-[32px] font-semibold font-['Raleway'] leading-[38px] text-[#242424]">
            Registered Sessions
          </p>
        </div>
        <div className="m-auto">
          <p className="text-[20px] font-medium leading-[23px] text-[#242424] font-['Raleway']">
            Sessions that you have Registered
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 m-[64px]">
        {session.length > 0
          ? session.map((data) => <RegisteredSessionCard data={data} />)
          : "This user have no session"}
      </div>
    </>
  );
};
export default RegisteredSession;
