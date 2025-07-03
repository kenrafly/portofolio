"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoHomeOutline, IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlinePerson, MdMarkEmailUnread } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // ← Add FiX
import gsap from "gsap";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const pathname = usePathname();

  linkRefs.current = [];

  const addToRefs = (el: HTMLAnchorElement) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (show && menuRef.current) {
      // Animate the menu icon
      gsap.fromTo(
        iconRef.current,
        { rotate: 0, scale: 1 },
        { rotate: 180, scale: 1.3, duration: 0.3, ease: "back.out(1.7)" }
      );

      // Animate mobile menu
      tl.fromTo(
        menuRef.current,
        {
          y: -200,
          opacity: 0,
          rotateZ: 10,
          skewY: 20,
          scale: 0.6,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          skewY: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        }
      )
        .to(
          menuRef.current,
          {
            boxShadow: "0 0 30px rgba(255,255,255,0.4)",
            duration: 0.2,
            repeat: 1,
            yoyo: true,
          },
          "<0.3"
        )
        .fromTo(
          linkRefs.current,
          {
            y: 50,
            opacity: 0,
            rotateX: 45,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          "-=0.5"
        );
    } else {
      // Animate closing menu icon
      gsap.fromTo(
        iconRef.current,
        { rotate: 180, scale: 1.3 },
        { rotate: 0, scale: 1, duration: 0.3, ease: "back.in(1.5)" }
      );
    }
  }, [show]);

  return (
    <nav className="border-white border-b fixed top-0 left-0 w-full z-50 bg-[#0E100F]">
      <ul className="flex items-center justify-between p-2 text-white relative">
        {/* Logo */}
        <li className="flex items-center border-white border-1 p-1 rounded-4xl">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          </Link>
          <p className="ml-2">kenrafly</p>
        </li>

        {/* Desktop links */}
        <li className="hidden md:flex items-center space-x-4 border-white border rounded-4xl">
          <Link
            href="/"
            className={`flex items-center space-x-2 px-4 py-2 rounded-4xl transition-all duration-300 ${
              pathname === "/"
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            <IoHomeOutline />
            <span>Home</span>
          </Link>

          <Link
            href="/projects"
            className={`flex items-center space-x-2 px-4 py-2 rounded-4xl transition-all duration-300 ${
              pathname === "/projects"
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            <IoBriefcaseOutline />
            <span>My Projects</span>
          </Link>
        </li>
        {/* Desktop contact */}
        <li className="hidden md:flex items-center space-x-3 border-white border-1 p-2 rounded-4xl">
          <MdMarkEmailUnread />
          <Link href={"/contact"}>Contact</Link>
        </li>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            show ? "flex" : "hidden"
          } flex-col md:hidden absolute top-20 w-full left-0 p-5 gap-4 border-white border-b bg-[#0E100F] z-50 rounded-b-3xl`}
        >
          <Link
            href={"/"}
            ref={addToRefs}
            className="flex items-center space-x-2 border-white border-1 p-3 rounded-2xl justify-between"
          >
            <span>Home</span>
            <IoHomeOutline />
          </Link>
          <Link
            href={"/projects"}
            ref={addToRefs}
            className="flex items-center space-x-2 border-white border-1 p-3 rounded-2xl justify-between"
          >
            <span>My Projects</span>
            <IoBriefcaseOutline />
          </Link>
          <Link
            href={"/about"}
            ref={addToRefs}
            className="flex items-center space-x-2 border-white border-1 p-3 rounded-2xl justify-between"
          >
            <span>About</span>
            <MdOutlinePerson />
          </Link>
        </div>

        {/* Toggle Menu Icon */}
        <button
          ref={iconRef}
          onClick={() => setShow(!show)}
          className="md:hidden text-3xl cursor-pointer transition-transform duration-300"
        >
          {show ? <FiX /> : <FiMenu />}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
