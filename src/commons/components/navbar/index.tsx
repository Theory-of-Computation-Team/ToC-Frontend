import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import { GiGreekTemple } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="fixed z-20 w-full h-16 bg-white drop-shadow-sm border-b-1 border-[#D9D9D9]">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-center px-6 space-x-6">
          <div className="w-6 h-6 md:w-8 md:h-8">
            <Image
              src="/assets/images/icon.png"
              alt="icon"
              width={512}
              height={512}
            />
          </div>
          <div className="hidden sm:flex items-center justify-center px-6 space-x-6">
            <Link
              href="/"
              className="text-graycolor capitalize group hover:border-b-2 border-secondary"
              replace
            >
              หน้าหลัก
            </Link>
            <Link
              href="/temples"
              className="text-graycolor capitalize group hover:border-b-2 border-secondary"
              replace
            >
              รายชื่อวัด
            </Link>
            <Link
              href="/learn"
              className="text-graycolor capitalize group hover:border-b-2 border-secondary"
              replace
            >
              หลักการ Regular Expression
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-end px-6 space-x-4">
          <a
            href="https://github.com/Theory-of-Computation-Team/ToC-Frontend"
            className="group inline-flex gap-3 items-center cursor-pointer text-tertiary"
          >
            <p className="hidden group-hover:block transition-all duration-200">
              Frontend
            </p>
            <BsGithub className="hover:scale-125 duration-200" />
          </a>
          <a
            href="https://github.com/Theory-of-Computation-Team/ToC-Backend"
            className="group inline-flex gap-3 items-center cursor-pointer text-secondary"
          >
            <p className="hidden group-hover:block transition-all duration-200">
              Backend
            </p>
            <BsGithub className="hover:scale-125 duration-200" />
          </a>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden flex justify-end items-end cursor-pointer px-6 space-x-4"
        >
          <RxHamburgerMenu />
        </div>

        <div
          className={
            menuOpen
              ? "flex-grow fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in duration-500 bg-[#D9D9D9]"
              : "fixed left-[-100%] h-screen top-0 p-10 hover:ease-in duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={handleNav} className="cursor-pointer sm:hidden">
              <RiCloseFill size={20} className="text-graycolor" />
            </div>
          </div>

          <div className="flex flex-col justify-center py-6 space-y-12 text-xs">
            <Link
              href="/"
              className="flex gap-4 text-base items-center text-graycolor capitalize hover:text-secondary"
              replace
            >
              <BiHomeAlt />
              หน้าหลัก
            </Link>
            <Link
              href="/temples"
              className="flex gap-4 text-base items-center text-graycolor capitalize hover:text-secondary"
              replace
            >
              <GiGreekTemple />
              รายชื่อวัด
            </Link>
            <Link
              href="/learn"
              className="flex gap-4 text-base text-graycolor capitalize hover:text-secondary"
              replace
            >
              <GrDocumentPdf />
              หลักการ Regular Expression
            </Link>
            <a
              href="https://github.com/Theory-of-Computation-Team/ToC-Frontend"
              target="_blank"
              className="flex gap-4 text-base items-center text-graycolor capitalize hover:text-secondary"
              rel="noreferrer"
            >
              <BsGithub />
              Frontend
            </a>
            <a
              href="https://github.com/Theory-of-Computation-Team/ToC-Backend"
              target="_blank"
              className="flex gap-4 text-base items-center text-graycolor capitalize hover:text-secondary"
              rel="noreferrer"
            >
              <BsGithub />
              Backend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
