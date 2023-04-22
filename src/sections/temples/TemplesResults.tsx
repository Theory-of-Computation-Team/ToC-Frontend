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
  searchQuery
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

function TempleList({ selected, id, label, temples, count }: ITempleListProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  if (!selected[id as keyof ITemplesSelectStateModel]) return null;

  return (
    <div className="">
      <h2 className="">{`${label} (${count.toString()})`}</h2>
      <div className="grid grid-cols-3">
        {(hidden ? temples.slice(0, 20) : temples).map((temple, index) => (
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
