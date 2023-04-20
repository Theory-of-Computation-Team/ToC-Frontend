import React from "react";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <div id="home-about" className="w-full py-6 md:py-8 md:px-32">
      <h1 className="font-bold text-2xl lg:text-3xl xl:text-5xl tracking-wide text-center">
        วัดในประเทศไทย
      </h1>

      <div className="flex py-4 md:py-8 gap-4 md:gap-8 justify-center items-center">
        <span className="rounded-full bg-redcolor w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 hover:-translate-y-2 transition ease-in-out duration-50"></span>
        <span className="rounded-full bg-[#FFFBE7]  w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 hover:-translate-y-2 transition ease-in-out duration-50"></span>
        <span className="rounded-full bg-tertiary  w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 hover:-translate-y-2 transition ease-in-out duration-50"></span>
        <span className="rounded-full bg-redcolor  w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 hover:-translate-y-2 transition ease-in-out duration-50"></span>
      </div>
    </div>
  );
};

export default HomeAbout;
