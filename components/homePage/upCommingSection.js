import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getSessionByUserSkills } from "../../utils_firebase/sessions";
import Spinner from "../spinner";
import SessionItem from "./upCommingSessionItem";

const UpCommingSection = ({ sessions, title, dis }) => {
  if (!sessions) {
    return <Spinner />;
  }

  return (
    <Fragment>

      <div className="py-10">
        <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-text text-center">{title}</h2>
        <p className="text-center text-text text-base">{dis}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-10">
        {
          sessions.map((session) => {
            return (
              <SessionItem key={session.id || Math.round(100)} session={session} />
            );
          })
        }
      </div>

      <div >
        {
          sessions.length === 0 && (
            <h2 className="text-lg xl:text-2xl text-primary text-center">We have no Recommended sessions for you.</h2>
          )
        }

      </div>

    </Fragment>
  );
};

export default UpCommingSection;
