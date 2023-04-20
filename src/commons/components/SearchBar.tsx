import React from "react";
import { ChangeEventHandler } from "react";
import { BiSearch } from "react-icons/bi";

export type ISearch = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ value, onChange }: ISearch) {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="w-72 px-4 py-3 sm:text-base md:text-lg bg-white border rounded-lg focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-10"
          placeholder="ค้นหาชื่อวัด.."
          value={value}
          onChange={onChange}
        />
        <BiSearch className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary" />
      </div>
    </>
  );
}
