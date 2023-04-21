import React, { useState } from "react";
import Head from "next/head";
import Search from "@/sections/search/Search";
import { TemplesHeader, TemplesMap, TemplesResults } from "@/sections/temples";
import {
  ISearchEieiProps,
  ITemplesResultsModel,
  ITemplesResultsProps,
  ITemplesSelectStateModel,
} from "@/types/TemplesTypes";
import axios from "axios";

export default function Learn(props: ITemplesResultsModel) {
  const [selected, setSelected] = useState<ITemplesSelectStateModel>({
    phayao: true,
    prachinburi: true,
    ayutthaya: true,
    pattani: true,
  });

  return (
    <>
      <Head>
        <title>ค้นหาวัดทั้งหมด</title>
      </Head>

      <Search selected={selected} setSelected={setSelected} results={props} />
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
