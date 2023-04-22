import React, { useState } from "react";
import {
  ITemplesResultsProps,
  ITemplesCheckboxProps,
  ITemplesSelectStateModel,
  ITempleListProps,
} from "@/types/TemplesTypes";

export default function TemplesResults({
  selected,
  setSelected,
  results,
  searchQuery,
}: ITemplesResultsProps) {
  const [all, setAll] = useState<boolean>(true);
  const provinces = [
    ["phayao", "พะเยา"],
    ["prachinburi", "ปราจีนบุรี"],
    ["ayutthaya", "พระนครศรีอยุธยา"],
    ["pattani", "ปัตตานี"],
  ];
  const filteredResults = Object.fromEntries(
    Object.entries(results).map(([key, value]) => [
      key,
      value
        ? value.filter((temple) =>
            temple.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : value,
    ])
  );

  return (
    <div className="h-[calc(100vh-12rem)] overflow-y-scroll">
      <div className="flex pt-4 justify-between overflow-auto space-x-2">
        <button
          className={`text-xs md:text-base text-center cursor-pointer py-1 px-4 rounded-[20px] border border-[#D9D9D9] hover:bg-[#F6C865] ${
            selected.ayutthaya &&
            selected.pattani &&
            selected.phayao &&
            selected.prachinburi
              ? "bg-primary text-white"
              : "text-black bg-white"
          }`}
          onClick={() => {
            if (
              selected.ayutthaya &&
              selected.pattani &&
              selected.phayao &&
              selected.prachinburi
            ) {
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
        >
          ทั้งหมด
        </button>
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
      {!selected.ayutthaya &&
      !selected.pattani &&
      !selected.phayao &&
      !selected.prachinburi ? (
        <h2 className="text-lg md:text-2xl pt-4 md:pt-8">
          เลือกจังหวัดที่ต้องการแสดงผล
        </h2>
      ) : (
        <div>
          {Object.entries(filteredResults).map(([key, result], i) => (
            <TempleList
              key={i}
              selected={selected}
              id={key}
              label={provinces[i][1]}
              temples={result}
              count={result.length}
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
    <button
      className={`text-xs md:text-base text-center cursor-pointer py-1 px-4 rounded-2xl border border-[#D9D9D9] hover:bg-[#F6C865] ${
        selected[id as keyof ITemplesSelectStateModel]
          ? "bg-primary text-white"
          : "bg-white"
      }`}
      onClick={() => {
        const temp = { ...selected };
        temp[id as keyof ITemplesSelectStateModel] =
          !selected[id as keyof ITemplesSelectStateModel];
        setSelected(temp);
      }}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={selected[id as keyof ITemplesSelectStateModel]}
        onChange={() => {
          const temp = { ...selected };
          temp[id as keyof ITemplesSelectStateModel] =
            !selected[id as keyof ITemplesSelectStateModel];
          setSelected(temp);
        }}
      />
      {label}
    </button>
  );
}

function TempleList({ selected, id, label, temples, count }: ITempleListProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  if (!selected[id as keyof ITemplesSelectStateModel]) return null;

  return (
    <div className="flex flex-col pt-2">
      <div className="flex items-center gap-6">
        <h1 className="font-semibold text-lg md:text-2xl py-4 tracking-wide">
          {`${label} `}
          <span className="font-semibold text-lg md:text-2xl py-4 tracking-wide text-[#2D2929]">
            {`(${count.toString()})`}
          </span>
        </h1>
        <div className="bg-[#565656] h-[1px] rounded-full flex-grow mx-4 "></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 content-evenly gap-2">
        {(hidden ? temples.slice(0, 20) : temples).map((temple, index) => (
          <p
            key={index}
            className="text-sm md:text-base"
            style={{ color: index % 2 === 0 ? "black" : "#565656" }}
          >
            {temple}
          </p>
        ))}
      </div>

      <button onClick={() => setHidden(!hidden)} className="underline pt-4">
        {hidden ? "แสดงทั้งหมด" : "แสดงน้อยลง"}
      </button>
    </div>
  );
}
