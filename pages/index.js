import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import HomePage from "../components/homePage";

export default function Home() {
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
