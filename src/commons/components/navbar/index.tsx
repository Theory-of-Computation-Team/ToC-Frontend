import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-blue-300">
      <div className="flex space-x-4">
        <Link
          href="/about#about-objective"
          className="text-[#999999] capitalize hover:text-primary"
          replace
        >
          หน้าหลัก
        </Link>
        <Link
          href="/about#about-story"
          className="text-[#999999] capitalize hover:text-primary"
          replace
        >
          รายชื่อวัด
        </Link>
        <Link
          href="/about#area-focus"
          className="text-[#999999] capitalize hover:text-primary"
          replace
        >
          หลักการ Regular Expression
        </Link>
        <Link
          href="/about#area-focus"
          className="text-[#999999] capitalize hover:text-primary"
          replace
        >
          หลักการ Regular Expression
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
