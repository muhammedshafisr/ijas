import { navLinks } from "@/constants/NavLinks";
import Image from "next/image";
import navImage from "../public/robo-4.png";
import joinImage from "../public/robo-3.png";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between p-1 md:p-4 mt-4">
      <Link
        href={"/"}
        className="logo bg-gray-900 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 overflow-hidden"
      >
        <Image
          src={navImage}
          alt="logo"
          className="w-14 hover:scale-150 cursor-pointer transition-all duration-200 ease-in"
        />
      </Link>
      <Link
        href={"/contact"}
        className="join px-4 py-2 bg-[#485ED8] rounded-lg shadow-lg h-fit flex"
      >
        <span>Contact Us</span>
      </Link>
      {/* <ul className=" gap-12 items-center justify-center text-lg hidden md:flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="blue-h transition-colors duration-200 ease-in-out"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul> */}
    </nav>
  );
}

export default NavBar;
