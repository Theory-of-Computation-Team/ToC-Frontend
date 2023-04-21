import React from "react";
import HomeSection from "@/components/HomeSection";
import { IHomeDetails } from "@/types/HomeType";

const HomeTemple = () => {
  const TextDetails: IHomeDetails[] = [
    {
      province: "prachinburi",
      image: "/assets/images/prachinburi.png",
      header: "ปราจีนบุรี",
      detail: `จังหวัดในภาคตะวันออกของประเทศไทย เป็นเมืองที่มีประวัติศาสตร์ยาวนาน มีการพบซากโบราณสถานในหลายพื้นที่ของจังหวัด นอกจากนี้ยังมีแหล่งท่องเที่ยวทางธรรมชาติหลายแห่ง มีอุทยานแห่งชาติอยู่ในเขตมรดกโลกถึง 3 แห่ง ทั้งยังเป็นจังหวัดที่มีพื้นที่ป่ามากที่สุดในภาคตะวันออกอีกด้วย`,
    },
    {
      province: "pattani",
      image: "/assets/images/pattani.png",
      header: "ปัตตานี",
      detail: `จังหวัดชายแดนใต้ของประเทศไทย เชื่อว่าเดิมปัตตานีเป็นอาณาจักรที่เก่าแก่และมีความเจริญรุ่งเรืองในอดีต เนื่องจากมีหลักฐานทาง โบราณคดีว่า บริเวณอำเภอยะรัง มีซากร่องรอยของเมืองโบราณขนาดใหญ่ซ้อนทับกันถึง ๓ เมือง
      `,
    },
    {
      province: "prayao",
      image: "/assets/images/prayao.png",
      header: "พะเยา",
      detail: `จังหวัดในภาคเหนือของประเทศไทย แล้วเป็นแคว้นเก่าแก่ นครรัฐ และรวมอยู่ในอาณาจักรล้านนา เป็นจังหวัดที่เก่าแก่นับหลายพันปี พะเยามีเมืองใหญ่ๆอยู่4แห่ง ได้แก่ เวียงภูกามยาว อาณาจักรเวียงโกมคำนคร เชียงคำ และ เมืองปง และภายหลังก็รวมเป็นแผ่นดินแดนกันได้ในสมัยพะเยาเข้าร่วมกับล้านนา `,
    },
    {
      province: "prachinburi",
      image: "/assets/images/ayutthaya.png",
      header: "พระนครศรีอยุธยา",
      detail: `จังหวัดในภาคกลางและเป็นเขตเศรษฐกิจอุตสาหกรรมที่สำคัญ โดยมีผลิตภัณฑ์มวลรวมของจังหวัดมีมูลค่าสูงเป็นอันดับ 3 ของประเทศ และมีประวัติศาสตร์ความเป็นมาที่ยาวนาน เคยมีชื่อเสียงในฐานะเป็นแหล่งปลูกข้าวที่สำคัญ  `,
    },
  ];

  return (
    <div className="container mx-auto px-8">
      {TextDetails.map((item, index) => (
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
