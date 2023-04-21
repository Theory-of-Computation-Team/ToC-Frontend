import React from "react";
import Head from "next/head";
import { HomeHeader } from "@/sections/home";
import { HomeAbout } from "@/sections/home";
import { HomeTemple } from "@/sections/home";
import { RegexContent, RegexHeader } from "@/sections/regex";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ยินดีต้อนรับเข้าสู่หน้าหลัก</title>
      </Head>

      <div>
        <RegexHeader/>
        <RegexContent/>
        {/* <HomeHeader /> */}
        {/* <HomeAbout /> */}
        {/* <HomeTemple /> */}
      </div>
    </>
  );
}
