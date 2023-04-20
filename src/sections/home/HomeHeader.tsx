import React from "react";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div id="home-header" className="w-full py-6 md:py-16 md:px-32">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-around px-8 py-8 md:py-12 gap-4">
        <div className="relative flex justify-center shrink-0 overflow-hidden px-2 py-8">
          <div className="absolute top-0 left-0 z-0 w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]">
            <Image
              src="/assets/images/circle.png"
              alt="hero"
              width={512}
              height={512}
            />
          </div>
          <div className="relative z-10">
            <Image
              src="/assets/images/home.png"
              alt="hero"
              className="w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]"
              width={512}
              height={512}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center md:text-left gap-6 md:gap-10 md:w-[350px]">
          <div className="space-y-6">
            <h1 className="font-normal text-3xl lg:text-5xl tracking-wide">
              ยินดีต้อนรับเข้าสู่
            </h1>
            <h1 className="font-bold text-3xl lg:text-8xl tracking-wide h-[4.2rem]">
              วัดส์
            </h1>
          </div>
          <div className="btn-primary text-xl lg:text-2xl">
            ดาวน์โหลด CSV <br /> รายชื่อวัดทั้งหมด
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
