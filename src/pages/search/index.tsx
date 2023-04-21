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
//import axios from "axios";

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

export async function getServerSideProps() {
  const urls = [
    "https://test-qdfa.onrender.com/temple/PrachinBuri",
    "https://test-qdfa.onrender.com/temple/prayao",
    "https://test-qdfa.onrender.com/temple/pattani",
    "https://test-qdfa.onrender.com/temple/Ayutthaya",
  ];

  const promises = urls.map((url) => axios.get(url));
  const responses = await Promise.all(promises);
  const data = responses.map((res: { data: any }) => res.data);

  return {
    props: {
      temples: data,
    },
  };
}
