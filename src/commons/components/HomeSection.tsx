import { IHomeDetails } from "@/types/HomeType";
import React, { useState } from "react";

const colors = {
  prachinburi: "#539165",
  pattani: "#FFBC2C",
  prayao: "#3F557F",
  ayutthaya: "#539165",
};

const HomeSection = ({
  province,
  image,
  header,
  detail,
  className,
}: IHomeDetails) => {
  const color = colors[province as keyof typeof colors];

  return (
    <div
      className={`container mx-auto flex flex-col md:flex-row md:justify-around px-8 py-8 md:py-12 gap-4 ${className}`}
    >
      <div className="flex flex-col justify-center gap-6 md:gap-10 md:w-[450px]">
        <div className="space-y-6">
          <a className="inline-block group font-bold text-xl md:text-2xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
            {header}
            <span
              style={{ backgroundColor: color }}
              className="block my-2 h-1 w-[50%] group-hover:w-full transition-all duration-500 ease-out"
            ></span>
          </a>

          <p className="font-normal text-base md:text-lg xl:text-xl tracking-wide line-clamp-3 md:line-clamp-none">
            {detail}
          </p>
        </div>
      </div>

      <div className="relative flex justify-center shrink-0 px-2 py-8">
        {/* <div className="absolute -top-10 -right-20 z-0 w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]">
          <picture>
            <img src={image} alt="circle" width={512} height={512} />
          </picture>
        </div> */}
        <div className="relative z-10">
          <picture>
            <img
              src={image}
              alt="province"
              width={512}
              height={512}
              className="w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
