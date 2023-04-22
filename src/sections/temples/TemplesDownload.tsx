import React from "react";
import { ITemplesResultsModel } from "@/types/TemplesTypes";
import { BsDownload } from "react-icons/Bs";

export default function TemplesDownload({
  results,
}: {
  results: ITemplesResultsModel;
}) {
  const templesToCSV = (results: ITemplesResultsModel) => {
    const provinceInThai = {
      phayao: "พะเยา",
      prachinburi: "ปราจีนบุรี",
      ayutthaya: "พระนครศรีอยุธยา",
      pattani: "ปัตตานี",
    };
    let csv = [["จังหวัด", "วัด"]];

    Object.entries(results).map(([key, temples]) => {
      temples.map((temple) => {
        csv.push([provinceInThai[key as keyof ITemplesResultsModel], temple]);
      });
    });

    return csv
      .map((v) =>
        v
          .map((x) => (isNaN(x as any) ? `"${x.replace(/"/g, '""')}"` : x))
          .join(",")
      )
      .join("\n");
  };

  return (
    <a
      className="w-Bst"
      href={
        "data:text/csv;charset=utf-8,%EF%BB%BF" +
        encodeURI(templesToCSV(results))
      }
      download="วัดส์.csv"
    >
      <BsDownload size="1.2rem" />
    </a>
  );
}
