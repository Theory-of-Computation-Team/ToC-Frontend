import React, { ReactNode } from "react";
import { IResultsModel } from "@/types/TemplesTypes";

export default function Download({
  results,
  child,
}: {
  results: IResultsModel;
  child: ReactNode;
}) {
  const templesToCSV = (results: IResultsModel) => {
    const provinceInThai = {
      phayao: "พะเยา",
      prachinburi: "ปราจีนบุรี",
      ayutthaya: "พระนครศรีอยุธยา",
      pattani: "ปัตตานี",
    };
    let csv = [["จังหวัด", "วัด"]];

    Object.entries(results).map(([key, temples]) => {
      temples.map((temple) => {
        csv.push([provinceInThai[key as keyof IResultsModel], temple]);
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
      className="w-Bst hover:scale-125 transition-all duration-200"
      href={
        "data:text/csv;charset=utf-8,%EF%BB%BF" +
        encodeURI(templesToCSV(results))
      }
      download="วัดส์.csv"
    >
      {child}
    </a>
  );
}
