import React, { ChangeEvent } from "react";
import { ITempleSearchProps } from "@/types/TemplesTypes";
import { BiSearch } from "react-icons/bi";

export default function TemplesSearch({
  searchQuery,
  setSearchQuery,
}: ITempleSearchProps) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <div className="relative flex items-center justify-between w-[200px] md:w-[350px]">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="ค้นหารายชื่อวัด..."
        className="w-full py-2 px-5 sm:text-sm md:text-lg border-[.5px] border-black rounded-full focus:border-secondary focus:ring-secondary focus:outline-none "
      />
      <BiSearch className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary" />
    </div>
  );
}
