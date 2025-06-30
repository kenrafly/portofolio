import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-[#0E100F] px-10 gap-4 border-t border-white py-10 justify-between">
      <div>
        <p>I build like it’s mine.</p>
        <h1 className="md:text-7xl font-bold text-[#17F1D1]">kenrafly</h1>
      </div>
      <div>
        <h1 className="text-[#FFD074] text-2xl">Explore</h1>
        <ul className="flex flex-col">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-me"}>About Me</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
      </div>
      <div>
        <h1 className="text-[#FFD074] text-2xl">Social</h1>
        <ul className="flex flex-col">
          <div className="flex items-center gap-2">
            <FaInstagram />
            <Link href={"https://instagram.com/kenrafly"}>Instagram</Link>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <Link href={"https://github.com/kenrafly"}>GitHub</Link>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <Link href={"https://linkedin.com/in/kenrafly"}>LinkedIn</Link>
          </div>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4 justify-end">
          <h1>Contact Me</h1>
          <div className="bg-black p-2 rounded-full flex items-center justify-between">
            <FaArrowRight className="text-[#03F203] text-2xl" />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4 justify-end">
          <h1>My Work</h1>
          <div className="bg-black p-2 rounded-full flex items-center justify-between">
            <FaArrowRight className="text-[#03F203] text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
