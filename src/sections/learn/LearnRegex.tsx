import SearchBar from "@/commons/components/SearchBar";
import React from "react";

const LearnRegex = () => {
  return (
    <div id="learn" className="w-full py-6 md:py-16 md:px-32">
      <div className="container mx-auto flex flex-col items-center px-8 py-8 md:py-12 gap-4">
        <h1 className="inline-block group font-bold text-xl md:text-2xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
          หลักการ Regular Expression
          <span className="block my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
        </h1>

        {/* <SearchBar /> */}
      </div>
    </div>
  );
};

export default LearnRegex;
