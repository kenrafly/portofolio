"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Hero = () => {
  const buildRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    buildRefs.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        duration: 8,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: [
            { x: 20, y: -10 },
            { x: 40, y: 0 },
            { x: 20, y: 10 },
            { x: 0, y: 0 },
            { x: -20, y: -10 },
            { x: -40, y: 0 },
            { x: -20, y: 10 },
            { x: 0, y: 0 },
          ],
          curviness: 1.5,
          autoRotate: false,
        },
      });
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center overflow-hidden max-md: p-5">
      {/* Floating SVGs */}
      <Image
        ref={(el) => {
          buildRefs.current[0] = el;
        }}
        src="/build.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute top-15 left-58 z-40"
      />
      <Image
        ref={(el) => {
          buildRefs.current[1] = el;
        }}
        src="/build2.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute top-24 right-78  z-40"
      />
      <Image
        ref={(el) => {
          buildRefs.current[2] = el;
        }}
        src="/build3.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute bottom-10 left-58 z-40"
      />

      {/* Main Text */}
      <div className="text-left tracking-tighter z-20">
        <h1 className=" text-5xl md:text-7xl font-bold text-[#A374FF] flex">
          FULL-STACK{" "}
          <span className="text-white text-sm font-light justify-center ml-2">
            {`// based on indonesia`}
          </span>
        </h1>
        <h1 className=" text-5xl md:text-7xl font-bold text-[#FFD074]">
          WEB DEVELOPER
        </h1>
        <h1 className=" text-5xl md:text-7xl font-bold">SPECIALIZING IN</h1>
        <h1 className=" text-5xl md:text-7xl font-bold text-[#17F1D1]">
          REACT JS <span className="text-white">&</span>
        </h1>
        <h1 className=" text-5xl md:text-7xl font-bold text-[#17F1D1] flex">
          NEXT JS.{" "}
          <span className="text-white text-sm font-light justify-center ml-2 max-w-1/2">
            {`// speed, UX, responsive, scalable, SEO, real business needs`}
          </span>
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-white font-light max-w-2xl text-center">
          I create <span className="text-[#A374FF]">modern</span>,{" "}
          <span className="text-[#FBCF74]">responsive</span>, and{" "}
          <span className="text-[#FBCF74]">high-performing</span> websites, from{" "}
          <span className="text-[#EE46D3]">frontend</span>{" "}
          <span className="text-[#EE46D3]">to backend</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
