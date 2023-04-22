import React from "react";

export default function TemplesHeader() {
  return (
    <div className="flex items-start my-5">
      <h1 className="relative inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
        รายชื่อวัด
        <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
      </h1>
    </div>
  );
}