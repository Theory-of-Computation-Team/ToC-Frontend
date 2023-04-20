import * as React from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

function Navbar() {
  return (
    <div className="fixed w-full bg-blue-300">
      <div className="flex space-x-4">
        <Link
          href="/about#about-objective"
          className="text-graycolor capitalize hover:text-primary"
          replace
        >
          หน้าหลัก
        </Link>
        <Link
          href="/about#about-story"
          className="capitalize hover:text-primary"
          replace
        >
          รายชื่อวัด
        </Link>
        <Link
          href="/about#area-focus"
          className="capitalize hover:text-primary"
          replace
        >
          หลักการ Regular Expression
        </Link>
        <Link
          href="/about#area-focus"
          className=" capitalize hover:text-primary"
          replace
        >
          หลักการ Regular Expression
        </Link>
        <Link
          href="/about#area-focus"
          className="text-[#999999] text-center hover:text-primary"
          replace
        >
          <BiSearch />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
