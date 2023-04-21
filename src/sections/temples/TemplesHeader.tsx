import React from "react";
import { BiSearch } from "react-icons/bi";

export default function TemplesHeader() {
  return (
    <div className="container w-[80%] flex justify-between items-center">
      <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
        รายชื่อวัด
        <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
      </h1>
      <div className="relative flex items-center justify-between w-[200px] md:w-[350px]">
        <input
          type="text"
          placeholder="ค้นหารายชื่อวัด..."
          className="w-full py-2 px-5 sm:text-sm md:text-lg border-[.5px] border-black rounded-full focus:border-secondary focus:ring-secondary focus:outline-none "
        />
        <BiSearch className="absolute inset-y-0 right-0 w-6 h-6 mx-4 my-auto text-[#999999] active:text-secondary" />
      </div>
    </div>
  );
}
