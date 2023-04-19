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

      {/* <div className="container mx-auto flex flex-col md:flex-row md:justify-around px-8 py-8 md:py-12 gap-4">
        <div className="flex flex-col justify-center gap-6 md:gap-10 md:w-[450px]">
          <div className="space-y-6">
            <a className="group font-bold text-xl md:text-2xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
              <span className="py-2 bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:50%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out">
                ปราจีนบุรี
              </span>
            </a>
            <p className="font-normal text-base md:text-lg xl:text-xl tracking-wide line-clamp-3 md:line-clamp-none">
              จังหวัดในภาคตะวันออกของประเทศไทย เป็นเมืองที่มีประวัติศาสตร์ยาวนาน
              มีการพบซากโบราณสถานในหลายพื้นที่ของจังหวัด
              นอกจากนี้ยังมีแหล่งท่องเที่ยวทางธรรมชาติหลายแห่ง
              มีอุทยานแห่งชาติอยู่ในเขตมรดกโลกถึง 3 แห่ง
              ทั้งยังเป็นจังหวัดที่มีพื้นที่ป่ามากที่สุดในภาคตะวันออกอีกด้วย
            </p>
          </div>
        </div>
        <div className="relative flex justify-center shrink-0 px-2 py-8">
          <div className="absolute -top-10 -right-20 z-0 w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]">
            <Image
              src="/assets/images/circle2.png"
              alt="hero"
              width={512}
              height={512}
            />
          </div>
          <div className="relative z-10">
            <Image
              src="/assets/images/prachinburi.png"
              alt="hero"
              className="w-60 md:w-[300px] lg:w-[350px] 2xl:w-[450px]"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeAbout;
