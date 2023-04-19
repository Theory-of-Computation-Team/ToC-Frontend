import React from "react";
import HomeSection from "@/components/HomeSection";
import TextDetail from "@/sections/home/TextDetail";

const HomeTemple = () => {
  return (
    <div className="">
      {TextDetail.map((item, index) => (
        <div key={index}>
          <HomeSection
            province={item.province}
            image={item.image}
            header={item.header}
            detail={item.detail}
            className={index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
          />
        </div>
      ))}
    </div>
  );
};
export default HomeTemple;
