import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import HomePage from "../components/homePage";
import styles from "../styles/Home.module.css";
import { userProxy } from "../apiProxy/userProxy";
import { getUsers } from "../utils_firebase/users";
export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    function name() {
      const users = getUsers();
      setUser(users);
    }
    name();
  }, []);

  if (!user) {
    return <p>loading</p>;
  }
  let data = new userProxy();

  // console.log(data.getFeaturedMentors());

  return (
    <Fragment>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="This is the homePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage mentor={user} />
    </Fragment>
  );
}
