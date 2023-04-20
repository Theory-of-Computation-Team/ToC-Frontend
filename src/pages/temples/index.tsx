import React from "react";
import Head from "next/head";
import { TemplesHeader, TemplesMap, TemplesResults } from "@/sections/temples";

export default function Temples() {
  return (
    <>
      <Head>
        <title>Temples Search | ค้นหาวัด</title>
      </Head>

      <TemplesHeader />
      <TemplesMap />
      <TemplesResults />
    </>
  );
}
