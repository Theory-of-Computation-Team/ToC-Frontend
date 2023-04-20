import React from "react";
import { BiSearch } from "react-icons/bi";

export default function TemplesHeader() {
  return (
    <div className="container w-[80%] flex justify-between items-center">
      <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
        รายชื่อวัด
        <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
      </h1>
      <div className="flex items-center border-[.5px] border-black rounded-full py-2 px-4 w-80">
        <BiSearch />
        <input placeholder="ค้นหารายชื่อวัด..." className="" />
      </div>
    </div>
  );
}
