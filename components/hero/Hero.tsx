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
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden max-md:p-5 border-b bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
      {/* Modern Animated Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #A374FF 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #17F1D1 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          animation: "backgroundMove 20s ease-in-out infinite",
        }}
      />

      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-32 w-4 h-4 border border-yellow-400 rounded-full opacity-30" />
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-cyan-400 opacity-25 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-3 h-3 border border-purple-400 opacity-35" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-cyan-400 opacity-20" />
        <div className="absolute top-2/3 left-1/4 w-3 h-3 border border-yellow-400 opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-yellow-400/5" />

      {/* Floating SVGs */}
      <Image
        ref={(el) => {
          buildRefs.current[0] = el;
        }}
        src="/build.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute top-70 left-5 md:top-15 md:left-108 z-40"
      />
      <Image
        ref={(el) => {
          buildRefs.current[1] = el;
        }}
        src="/build2.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute top-68 right-15 md:top-24 md:right-108  z-40"
      />
      <Image
        ref={(el) => {
          buildRefs.current[2] = el;
        }}
        src="/build3.svg"
        alt="Build"
        width={70}
        height={70}
        className="absolute bottom-80 md:bottom-40 md:left-88 z-40"
      />

      {/* Main Text */}
      <div className="text-left tracking-tighter z-20">
        <h1 className=" text-6xl md:text-7xl font-bold text-[#A374FF] flex">
          FULL-STACK{" "}
          <span className="text-white text-sm font-light justify-center ml-2">
            {`// based on indonesia`}
          </span>
        </h1>
        <h1 className=" text-6xl md:text-7xl font-bold text-[#FFD074]">
          WEB DEVELOPER
        </h1>
        <h1 className=" text-6xl md:text-7xl font-bold">SPECIALIZING IN</h1>
        <h1 className=" text-6xl md:text-7xl font-bold text-[#17F1D1]">
          REACT JS <span className="text-white">&</span>
        </h1>
        <h1 className=" text-6xl md:text-7xl font-bold text-[#17F1D1] flex">
          NEXT JS.{" "}
          <span className="text-white text-sm font-light justify-center ml-2 max-w-1/2">
            {`// speed, UX, responsive, scalable, SEO, real business needs`}
          </span>
        </h1>
        <p className="text-2xl md:text-2xl mt-4 text-white font-light max-w-2xl text-center">
          I create <span className="text-[#A374FF]">modern</span>,{" "}
          <span className="text-[#FBCF74]">responsive</span>, and{" "}
          <span className="text-[#FBCF74]">high-performing</span> websites, from{" "}
          <span className="text-[#EE46D3]">frontend</span>{" "}
          <span className="text-[#EE46D3]">to backend</span>.
        </p>
      </div>

      {/* Background Animation Styles */}
      <style jsx>{`
        @keyframes backgroundMove {
          0%,
          100% {
            background-position: 50% 0%;
          }
          25% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 100% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
