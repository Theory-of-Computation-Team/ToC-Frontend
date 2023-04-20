import React, { useState } from "react";
import Head from "next/head";
import { TemplesHeader, TemplesMap, TemplesResults } from "@/sections/temples";
import {
  ITemplesResultsModel,
  ITemplesSelectStateModel,
} from "@/types/TemplesTypes";

export default function Temples(props: ITemplesResultsModel) {
  const [selected, setSelected] = useState<ITemplesSelectStateModel>({
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

      <div className="flex flex-col items-center pt-16">
        <TemplesHeader />
        <TemplesMap selected={selected} setSelected={setSelected} />
        <TemplesResults
          selected={selected}
          setSelected={setSelected}
          results={props}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const phayaoRes = await fetch("https://test-qdfa.onrender.com/temple/prayao");
  const phayao: string[] = await phayaoRes.json();
  const prachinburiRes = await fetch(
    "https://test-qdfa.onrender.com/temple/PrachinBuri"
  );
  const prachinburi: string[] = await prachinburiRes.json();
  const ayutthayaRes = await fetch(
    "https://test-qdfa.onrender.com/temple/Ayutthaya"
  );
  const ayutthaya: string[] = await ayutthayaRes.json();
  const pattaniRes = await fetch(
    "https://test-qdfa.onrender.com/temple/pattani"
  );
  const pattani: string[] = await pattaniRes.json();

  return {
    props: {
      phayao: phayao,
      prachinburi: prachinburi,
      ayutthaya: ayutthaya,
      pattani: pattani,
    },
  };
}
