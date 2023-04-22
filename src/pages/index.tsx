import React from "react";
import Head from "next/head";
import { HomeHeader } from "@/sections/home";
import { HomeAbout } from "@/sections/home";
import { HomeTemple } from "@/sections/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wath | ยินดีต้อนรับเข้าสู่วัดส์</title>
      </Head>

      <div>
        <HomeHeader />
        <HomeAbout />
        <HomeTemple />
      </div>
    </>
  );
}
