import React from "react";
import Head from "next/head";
import { HomeAbout, HomeHeader, HomeTemple } from "@/sections/home";

export default function Temples() {
  return (
    <>
      <Head>
        <title>Temples Search | ค้นหาวัด</title>
      </Head>

      <HomeHeader />
      <HomeAbout />
      <HomeTemple />
    </>
  );
}
