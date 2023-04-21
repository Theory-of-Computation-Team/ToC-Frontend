import React, { useState } from "react";
import { ITemplesResultsProps } from "@/types/TemplesTypes";
import { SearchEiei, TempleList } from "../temples/TemplesResults";
import { ISearch } from "@/types/SearchTypes";

const Search = ({ selected, setSelected, results }: ITemplesResultsProps) => {
  const provinces = [
    ["phayao", "พะเยา"],
    ["prachinburi", "ปราจีนบุรี"],
    ["ayutthaya", "พระนครศรีอยุธยา"],
    ["pattani", "ปัตตานี"],
  ];

  function isStringArray(value: any): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === "string")
    );
  }
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleSearch(searchText: string) {
    setSearchQuery(searchText);
  }

  const filteredResults = Object.fromEntries(
    Object.entries(results).map(([key, value]) => [
      key,
      isStringArray(value)
        ? value.filter((temple) =>
            temple.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : value,
    ])
  );

  return (
    <div id="search" className="w-full py-6 md:px-32">
      <div className="container mx-auto flex flex-col items-start px-8 py-4 md:py-12 gap-4">
        <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
          ค้นหาวัดทั้งหมด
          <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
        </h1>
        <p className="font-normal text-base md:text-lg xl:text-xl text-graycolor">
          คุณสามารถค้นหารายชื่อวัดในจังหวัดปราจีนบุรี ปัตตานี พะเยา
          พระนครศรีอยุธยาได้{" "}
        </p>
        <div className="flex flex-col items-start mt-4">
          <SearchEiei
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
          />
          <div className="flex space-x-8 py-8">
            {Object.entries(filteredResults).map(([key, result], i) => (
              <TempleList
                key={i}
                selected={selected}
                id={key}
                label={provinces[i][1]}
                temples={isStringArray(result) ? result : []}
                count={isStringArray(result) ? result.length : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
