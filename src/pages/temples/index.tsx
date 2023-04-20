import React, { useState } from "react";
import Head from "next/head";
import { TemplesHeader, TemplesMap, TemplesResults } from "@/sections/temples";
import { ITemplesMapSelected } from "@/types/TemplesTypes";

export default function Temples() {
  const [selected, setSelected] = useState<ITemplesMapSelected>({
    phayao: true,
    prachinburi: true,
    ayutthaya: true,
    pattani: true,
  });

  return (
    <>
      <Head>
        <title>Temples Search | รายชื่อวัด</title>
      </Head>

      <div className="flex flex-col items-center">
        <TemplesHeader />
        <TemplesMap selected={selected} setSelected={setSelected} />
        <TemplesResults selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}
