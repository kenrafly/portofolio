"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // when top of container hits 80% of viewport
        end: "bottom 20%",
        toggleActions: "play none none none", // play once
      },
    });

    tl.from(containerRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col border-t border-white p-4 overflow-hidden"
    >
      <h1 className="text-3xl md:text-2xl lg:text-6xl font-bold text-left">
        What my clients say
      </h1>
      <div className="flex flex-col md:flex-row items-center p-6 gap-7">
        <div className="relative w-40 h-40 md:w-80 md:h-80 flex-shrink-0">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left mt-4 leading-snug">
            <span>
              “Working with Rafly was a game-changer. He built a lightning-fast,
              professional website that made my{" "}
            </span>
            <span className="text-[#825DCC]">business</span>
            <span>
              {" "}
              more visible and profitable. What impressed me most is how he
              treated my project like it was his own with{" "}
              <span className="text-[#825DCC]">care,</span>{" "}
              <span className="text-[#FFD074]">strategy,</span>{" "}
              <span className="text-[#17F1D1]">and passion.”</span>
            </span>
          </h2>
          <p className="mt-4 font-medium">M R H.R</p>
          <span>
            founder of{" "}
            <Link
              className="text-[#825DCC]"
              target="_blank"
              href="https://donghuamny.com"
            >
              donghuamny.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
