import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { ISearchEieiProps, ITemplesResultsProps } from "@/types/TemplesTypes";
import { SearchEiei, TempleList } from "./TemplesResults";

// export default function TemplesHeader() {
//   return (
//     <div className="container w-[80%] flex justify-between items-center">
//       <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
//         รายชื่อวัด
//         <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
//       </h1>
//       <div className="relative flex items-center justify-between w-[200px] md:w-[350px]">
//         <input
//           type="text"
//           placeholder="ค้นหารายชื่อวัด..."
//           className="w-full py-2 px-5 sm:text-sm md:text-lg border-[.5px] border-black rounded-full focus:border-secondary focus:ring-secondary focus:outline-none "
//         />
//         <BiSearch className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary" />
//       </div>
//     </div>
//   );
// }

const TemplesHeader = ({
  selected,
  setSelected,
  results,
}: ITemplesResultsProps) => {
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
    <div className="container w-[80%] flex justify-between items-center">
      <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
        รายชื่อวัด
        <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
      </h1>
      <SearchEiei
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      {/* <TempleList
        selected={selected}
        setSelected={setSelected}
        temples={filteredResults}
      /> */}
      <div className="">
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
  );
};

export default TemplesHeader;

// const TemplesHeader = ({
//   searchText,
//   setSearchText,
//   onSearch,
// }: ISearchBarProps) => {
//   return (
//     <div className="relative flex items-center justify-between w-[200px] md:w-[350px]">
//       <input
//         type="text"
//         placeholder="ค้นหารายชื่อวัด..."
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         className="w-full py-2 px-5 sm:text-sm md:text-lg border-[.5px] border-black rounded-full focus:border-secondary focus:ring-secondary focus:outline-none "
//       />
//       <button onClick={() => onSearch(searchText)}>Search</button>
//       <BiSearch className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary" />
//     </div>
//   );
// };

// export default TemplesHeader;
