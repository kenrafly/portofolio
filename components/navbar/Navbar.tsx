"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="border-white border-b">
      <ul className="flex items-center justify-between p-4 text-white">
        <li className="flex items-center border-white border-2 p-2 rounded-4xl ">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          </Link>
          <p className="ml-2">Ken Rafly</p>
        </li>
        <li className=" hidden md:flex items-center space-x-4 border-white border-2 p-3 rounded-4xl">
          <Link href={"/"} className="flex items-center space-x-2">
            <IoHomeOutline className="font-extrabold" />
            <span>Home</span>
          </Link>
          <Link href={"/projects"} className="flex items-center space-x-2">
            <IoBriefcaseOutline />
            <span>My Projects</span>
          </Link>
          <Link href={"/about"} className="flex items-center space-x-2">
            <MdOutlinePerson />
            <span>About</span>
          </Link>
        </li>
        <li className="hidden md:flex items-center space-x-3 border-white border-2 p-3 rounded-4xl">
          <MdMarkEmailUnread />
          <Link href={"/contact"}>Contact</Link>
        </li>
        <div
          className={`${
            show ? "flex flex-col" : "hidden"
          } md:hidden absolute top-21 w-full left-0 p-5 gap-4 border-white border-b bg-[#0E100F]`}
        >
          <Link
            href={"/"}
            className="flex items-center space-x-2 border-white border-2 p-3 rounded-2xl justify-between"
          >
            <span>Home</span>
            <IoHomeOutline className="font-extrabold" />
          </Link>
          <Link
            href={"/projects"}
            className="flex items-center space-x-2 border-white border-2 p-3 rounded-2xl justify-between"
          >
            <span>My Projects</span>
            <IoBriefcaseOutline />
          </Link>
          <Link
            href={"/about"}
            className="flex items-center space-x-2 border-white border-2 p-3 rounded-2xl justify-between"
          >
            <span>About</span>
            <MdOutlinePerson />
          </Link>
        </div>
        <FiMenu className="md:hidden text-3xl" onClick={() => setShow(!show)} />
      </ul>
    </nav>
  );
};

export default Navbar;
