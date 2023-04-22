import React from "react";
import Head from "next/head";
import { LearnRegex } from "@/sections/learn";

export default function Learn() {
  return (
    <>
      <Head>
        <title>
          Learn | เรียนรู้เกี่ยวกับ Regular Expression
        </title>
      </Head>

      <LearnRegex />
    </>
  );
}
