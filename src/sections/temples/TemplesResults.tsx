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
      <div className="flex py-4 justify-between">
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
        <div>เลือกจังหวัดที่ต้องการแสดงผล</div>
      ) : (
        <div className="">
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

    // <label className="bg-green-300">
    //   <input
    //     type="checkbox"
    //     className=""
    //     checked={selected[id as keyof ITemplesSelectStateModel]}
    //     onChange={() => {
    //       const temp = { ...selected };
    //       temp[id as keyof ITemplesSelectStateModel] =
    //         !selected[id as keyof ITemplesSelectStateModel];
    //       setSelected(temp);
    //     }}
    //   />
    //   {label}
    // </label>
  );
}

function TempleList({ selected, id, label, temples, count }: ITempleListProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  if (!selected[id as keyof ITemplesSelectStateModel]) return null;

  return (
    <div className="flex flex-col items-start">
      <div className="my-4 md:my-6">
        <h2 className="font-semibold text-xl my-2">{`${label} (${count.toString()})`}</h2>
        <div className="grid grid-cols-3 gap-4 w-[40vw]">
          {(hidden ? temples.slice(0, 20) : temples).map((temple, index) => (
            <p key={index} className="text-sm md:text-base">
              {temple}
            </p>
          ))}
        </div>
      </div>
      <button onClick={() => setHidden(!hidden)} className="underline ">
        {hidden ? "แสดงทั้งหมด" : "แสดงน้อยลง"}
      </button>
    </div>
  );
}
