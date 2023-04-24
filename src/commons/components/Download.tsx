import React, { ReactNode } from "react";
import { IResultsModel, IResultsSelectionModel } from "@/types/TemplesTypes";

export default function Download({
  results,
  selected,
  child,
}: {
  results: IResultsModel;
  selected: IResultsSelectionModel;
  child: ReactNode;
}) {
  const templesToCSV = (
    results: IResultsModel,
    selected: IResultsSelectionModel
  ) => {
    const provinceInThai = {
      phayao: "พะเยา",
      prachinburi: "ปราจีนบุรี",
      ayutthaya: "พระนครศรีอยุธยา",
      pattani: "ปัตตานี",
    };
    let csv = [["จังหวัด", "วัด"]];

    Object.entries(results).map(([key, temples]) => {
      if (selected[key as keyof IResultsSelectionModel]) {
        temples.map((temple) => {
          csv.push([provinceInThai[key as keyof IResultsModel], temple]);
        });
      }
    });

    return csv
      .map((v) =>
        v
          .map((x) => (isNaN(x as any) ? `"${x.replace(/"/g, '""')}"` : x))
          .join(",")
      )
      .join("\n");
  };

  const canDownload =
    selected.phayao &&
    selected.prachinburi &&
    selected.ayutthaya &&
    selected.pattani;

  return (
    <a
      className={`w-Bst hover:scale-125 transition-all duration-200 ${
        canDownload ? "" : "opacity-50 cursor-not-allowed"
      }`}
      href={
        "data:text/csv;charset=utf-8,%EF%BB%BF" +
        encodeURI(templesToCSV(results, selected))
      }
      download="วัดส์.csv"
      onClick={(e) => {
        if (canDownload) {
          e.preventDefault();
          {
            child;
          }
        }
      }}
    >
      {child}
    </a>
  );
}
