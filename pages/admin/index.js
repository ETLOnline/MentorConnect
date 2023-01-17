import React, { useEffect, useState } from "react";
import Aside from "../../components/admin/aside";
import Header from "../../components/admin/header";
import Table from "../../components/admin/table";
import Spinner from "../../components/spinner";
import { getUsers } from "../../utils_firebase/users";

function Index() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      console.log(data, "admin");
      setUserData(data);
    });
  }, []);

  return (
    <div>
      <div className="relative bg-blue-50 overflow-hidden max-h-full">
        <Header />
        <Aside />

        <main className="ml-60 pt-16 ">
          <div className="px-6 bg-white py-8">
            {userData.length > 0 ? <Table users={userData} /> : <Spinner />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
