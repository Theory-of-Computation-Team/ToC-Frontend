import React, { useState } from "react";
import {
  ITemplesResultsProps,
  ITemplesCheckboxProps,
  ITemplesSelectStateModel,
  ITempleListProps,
  ISearchEieiProps,
} from "@/types/TemplesTypes";
import { BiSearch } from "react-icons/bi";

export default function TemplesResults({
  selected,
  setSelected,
  results,
}: ITemplesResultsProps) {
  const [all, setAll] = useState<boolean>(true);
  const provinces = [
    ["phayao", "พะเยา"],
    ["prachinburi", "ปราจีนบุรี"],
    ["ayutthaya", "พระนครศรีอยุธยา"],
    ["pattani", "ปัตตานี"],
  ];
  //console.log(results)

  function isStringArray(value: any): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === "string")
    );
  }

  const [searchQuery, setSearchQuery] = useState<string>("");

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

  // function handleSearch(searchText: string) {
  //   setSearchQuery(searchText);
  // }
  function handleSearch(searchText: string) {
    setSearchQuery(searchText);
  }

  return (
    <div className="container mt-16">
      <div className="">
        <label className="">
          <input
            type="checkbox"
            className=""
            checked={
              selected.ayutthaya &&
              selected.pattani &&
              selected.phayao &&
              selected.prachinburi
            }
            onChange={() => {
              setAll(!all);
              if (all) {
                setSelected({
                  phayao: false,
                  prachinburi: false,
                  ayutthaya: false,
                  pattani: false,
                });
              } else {
                setSelected({
                  phayao: true,
                  prachinburi: true,
                  ayutthaya: true,
                  pattani: true,
                });
              }
            }}
          />
          ทั้งหมด
        </label>
        {provinces.map((checkbox, index) => (
          <CatagoryCheckbox
            key={index}
            selected={selected}
            setSelected={setSelected}
            id={checkbox[0]}
            label={checkbox[1]}
          />
        ))}
      </div>

      {/* search bar */}
      {/* <div className="bg-red-300">
        <label htmlFor="search" className="">
          ค้นหาวัด
        </label>
        <input
          type="text"
          id="search"
          className=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */}

      {/* <div>
        <TemplesSearchbar
          searchText={searchQuery}
          setSearchText={setSearchQuery}
          onSearch={handleSearch}
        />
      </div> */}

      <div>
        <SearchEiei
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
      </div>

      {!selected.ayutthaya &&
      !selected.pattani &&
      !selected.phayao &&
      !selected.prachinburi ? (
        <div className="">เลือกจังหวัดที่ต้องการแสดงผล</div>
      ) : (
        <div className="">
          {/* {Object.entries(results).map(([key, result], i) => (
            <TempleList
              key={i}
              selected={selected}
              id={key}
              label={provinces[i][1]}
              temples={result}
              count={result.length}
            />
          ))} */}
          {/* change result is filteredResults */}
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
      )}
    </div>
  );
}

function CatagoryCheckbox({
  selected,
  setSelected,
  id,
  label,
}: ITemplesCheckboxProps) {
  return (
    <label className="">
      <input
        type="checkbox"
        className=""
        checked={selected[id as keyof ITemplesSelectStateModel]}
        onChange={() => {
          const temp = { ...selected };
          temp[id as keyof ITemplesSelectStateModel] =
            !selected[id as keyof ITemplesSelectStateModel];
          setSelected(temp);
        }}
      />
      {label}
    </label>
  );
}

export function TempleList({
  selected,
  id,
  label,
  temples,
  count,
}: ITempleListProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  if (!selected[id as keyof ITemplesSelectStateModel]) return null;

  return (
    <div className="">
      <h2 className="">{`${label} (${count.toString()})`}</h2>
      <div className="bg-green-300">
        {(hidden ? temples.slice(0, 30) : temples).map((temple, index) => (
          <p key={index} className="">
            {temple}
          </p>
        ))}
      </div>
      <button onClick={() => setHidden(!hidden)} className="">
        {hidden ? "แสดงทั้งหมด" : "แสดงน้อยลง"}
      </button>
    </div>
  );
}

export function SearchEiei({
  searchQuery,
  setSearchQuery,
  onSearch,
}: ISearchEieiProps) {
  return (
    <div className="z-10 relative flex items-center justify-between w-[200px] md:w-[350px]">
      <input
        type="text"
        placeholder="ค้นหารายชื่อวัด..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-2 px-5 sm:text-sm md:text-lg border-[.5px] border-black rounded-full focus:border-secondary focus:ring-secondary focus:outline-none "
      />
      <button
        onClick={() => onSearch(searchQuery)}
        className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary"
      >
        <BiSearch />
      </button>
    </div>
  );
}
