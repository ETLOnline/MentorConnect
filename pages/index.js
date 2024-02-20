import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/homePage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>TheLearningDao</title>
        <meta name="description" content="This is the homePage" />
      </Head>
      <HomePage />
    </Fragment>
  );
}
