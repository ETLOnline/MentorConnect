import React, { useEffect, useState } from "react";
import Aside from "../../components/admin/aside";
import Header from "../../components/admin/header";
import Table from "../../components/admin/table";
import Spinner from "../../components/spinner";
import { getUsers } from "../../utils_firebase/users";
import { getAllSessions } from "../../utils_firebase/sessions";
import SessionTable from "../../components/admin/sessionTable";

function Index() {
  const [userData, setUserData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [userTable, setUserTable] = useState(true);
  const [sessionTable, setSessionTable] = useState(false);
  useEffect(() => {
    getUsers().then((data) => {
      console.log(data, "admin");
      setUserData(data);
    });
    getAllSessions().then((sdata) => {
      console.log(sdata, "session data");
      setSessionData(sdata);
    });
  }, []);
  const userTableHandler = () => {
    console.log("user table hazir ho");
    setUserTable(true);
    setSessionTable(false);
  };
  const sessionTableHandler = () => {
    console.log("session table hazir ho");
    setUserTable(false);
    setSessionTable(true);
  };

  return (
    <div>
      <div className="relative bg-blue-50 overflow-hidden max-h-full">
        <Header />
        <Aside
          userTable={userTableHandler}
          sessionTable={sessionTableHandler}
        />

        <main className="ml-60 pt-16 ">
          <div className="px-6 bg-white py-8">
            {userTable &&
              (userData.length > 0 ? <Table users={userData} /> : <Spinner />)}
            {sessionTable &&
              (sessionData.length > 0 ? (
                <SessionTable sessions={sessionData} />
              ) : (
                <Spinner />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
