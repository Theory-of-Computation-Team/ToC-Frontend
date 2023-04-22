import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import {
  TemplesHeader,
  TemplesMap,
  TemplesResults,
  TemplesSearch,
} from "@/sections/temples";
import {
  ITemplesResultsModel,
  ITemplesSelectStateModel,
} from "@/types/TemplesTypes";

export default function Temples(props: ITemplesResultsModel) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selected, setSelected] = useState<ITemplesSelectStateModel>({
    phayao: true,
    prachinburi: true,
    ayutthaya: true,
    pattani: true,
  });

  return (
    <div className="">
      <Head>
        <title>Temples Search | รายชื่อวัด</title>
      </Head>

      <div className="container mx-auto px-6 md:px-20 py-16 md:pt-32 gap-x-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <TemplesHeader />
        <TemplesSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <TemplesMap selected={selected} setSelected={setSelected} />
        <TemplesResults
          selected={selected}
          setSelected={setSelected}
          results={props}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const URLs = [
    "https://test-qdfa.onrender.com/temple/prayao",
    "https://test-qdfa.onrender.com/temple/PrachinBuri",
    "https://test-qdfa.onrender.com/temple/Ayutthaya",
    "https://test-qdfa.onrender.com/temple/pattani",
  ];

  const res = await axios.all(URLs.map((URL) => axios.get<string[]>(URL)));

  return {
    props: {
      phayao: res[0].data,
      prachinburi: res[1].data,
      ayutthaya: res[2].data,
      pattani: res[3].data,
    },
  };
}
