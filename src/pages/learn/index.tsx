import React from "react";
import Head from "next/head";
import { LearnRegex } from "@/sections/learn";

export default function Learn() {
  return (
    <>
      <Head>
        <title>หลักการ Regular Expression</title>
      </Head>

      <LearnRegex />
    </>
  );
}
