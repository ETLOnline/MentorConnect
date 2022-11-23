import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import HomePage from "../components/homePage";
import styles from "../styles/Home.module.css";
import { userProxy } from "../apiProxy/userProxy";
export default function Home() {
  let data = new userProxy();

  // console.log(data.getFeaturedMentors());

  return (
    <Fragment>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="This is the homePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </Fragment>
  );
}
