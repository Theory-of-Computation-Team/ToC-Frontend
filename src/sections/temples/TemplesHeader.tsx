import React from "react";
import TemplesSearch from "./TemplesSearch";

export default function TemplesHeader() {
  return (
    <div className="container mx-auto flex flex-col items-start px-8 py-4 md:py-12 gap-4">
      <h1 className="relative inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
        รายชื่อวัด
        <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
      </h1>
    </div>
  );
}
