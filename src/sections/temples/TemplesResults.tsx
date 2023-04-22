import React, { useState } from "react";
import {
  ITemplesResultsProps,
  ITemplesCheckboxProps,
  IResultsSelectionModel,
  ITempleListProps,
} from "@/types/TemplesTypes";

export default function TemplesResults({
  selected,
  setSelected,
  results,
  searchQuery,
}: ITemplesResultsProps) {
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
    <div className="h-screen md:h-[80vh] md:overflow-y-scroll">
      <div className="flex pt-4 justify-between overflow-auto space-x-2">
        <button
          className={`text-xs md:text-base text-center cursor-pointer py-1 px-4 rounded-[20px] border border-black  ${
            selected.ayutthaya &&
            selected.pattani &&
            selected.phayao &&
            selected.prachinburi
              ? "bg-primary"
              : "bg-white"
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
      className={`text-xs md:text-base text-center cursor-pointer py-1 px-4 rounded-2xl border-[.5px] border-black  ${
        selected[id as keyof IResultsSelectionModel]
          ? "bg-primary"
          : "bg-white"
      }`}
      onClick={() => {
        const temp = { ...selected };
        temp[id as keyof IResultsSelectionModel] =
          !selected[id as keyof IResultsSelectionModel];
        setSelected(temp);
      }}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={selected[id as keyof IResultsSelectionModel]}
        onChange={() => {
          const temp = { ...selected };
          temp[id as keyof IResultsSelectionModel] =
            !selected[id as keyof IResultsSelectionModel];
          setSelected(temp);
        }}
      />
      {label}
    </button>
  );
}

function TempleList({ selected, id, label, temples, count }: ITempleListProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  if (!selected[id as keyof IResultsSelectionModel]) return null;

  return (
    <div className="flex flex-col pt-2">
      <div className="flex items-center gap-6">
        <h1 className="font-semibold text-lg md:text-2xl py-4 tracking-wide">
          {`${label} `}
          <span className="font-semibold text-lg md:text-2xl py-4 tracking-wide text-[#2D2929]">
            {`(${count.toString()})`}
          </span>
        </h1>
        <div className="bg-black h-[.5px] flex-grow mx-4 "></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 content-evenly gap-2">
        {count === 0 ? (
          <div className="">ไม่พบผลการค้นหา</div>
        ) : (
          (hidden ? temples.slice(0, 30) : temples).map((temple, index) => (
            <p
              key={index}
              className="text-sm md:text-base"
              style={{ color: index % 2 === 0 ? "black" : "#565656" }}
            >
              {temple}
            </p>
          ))
        )}
      </div>

      {count <= 30 ? null : (
        <button onClick={() => setHidden(!hidden)} className="underline pt-4">
          {hidden ? "แสดงทั้งหมด" : "แสดงน้อยลง"}
        </button>
      )}
    </div>
  );
}
