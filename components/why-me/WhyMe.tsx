"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const colors = ["#FFD074", "#A374FF", "#17F1D1", "#00FFC2", "#FF6F91"];

const splitWordsToSpans = (text: string) => {
  return text.split("").map((char, index) => {
    const color = colors[index % colors.length];
    return (
      <span key={index} className="inline-block overflow-hidden">
        <span className="letter inline-block" style={{ color: color }}>
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    );
  });
};

const WhyMe = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate letters from below
      const letters = gsap.utils.toArray(".letter");
      gsap.fromTo(
        letters,
        {
          y: 100,
          opacity: 0,
          rotateX: 80,
          skewX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          skewX: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Highlight color animation
      gsap.to(".highlight", {
        color: "#00FFC2",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animate top bar from left
      const topChildren =
        topBarRef.current?.querySelectorAll("p, a, div, svg") || [];

      gsap.fromTo(
        topChildren,
        {
          x: -80,
          opacity: 0,
          rotateY: 20,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: topBarRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#0E100F] min-h-screen text-white p-6 overflow-hidden">
      {/* Top Bar */}
      <div
        ref={topBarRef}
        className="flex flex-row sm:justify-between items-center justify-center w-full gap-4"
      >
        <p className="text-white text-lg font-mono tracking-wide text-center">
          {"{ Why Me ? }"}
        </p>
        <div className="flex items-center justify-center border-white border rounded-full p-2 gap-2 hover:scale-105 transition-transform duration-200">
          <Link
            href="https://www.instagram.com/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition-transform duration-200"
          >
            <FaInstagram className="text-xl" />
          </Link>
          <Link
            href="https://github.com/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition-transform duration-200"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition-transform duration-200"
          >
            <FaLinkedin className="text-xl" />
          </Link>
        </div>
        <div className="flex items-center justify-center border-white border rounded-full p-1 gap-2">
          <MdMarkEmailUnread />
          <p className="text-sm break-all hidden sm:block">
            raflyardiansyahreal@gmail.com
          </p>
        </div>
      </div>

      {/* Split Text */}
      <div
        ref={sectionRef}
        className="mt-24 max-w-6xl w-full leading-none text-left text-4xl md:text-6xl font-bold"
      >
        <h1>
          {splitWordsToSpans(
            "I help startups and businesses build web apps that are fast, SEO-friendly, and fully custom."
          )}
        </h1>
        <h1 className="mt-6">
          {splitWordsToSpans("Built with ")}
          <span className="highlight">{splitWordsToSpans("React, ")}</span>
          <span className="highlight">{splitWordsToSpans("Next.js")}</span>
          {splitWordsToSpans(", and modern best practices.")}
        </h1>
      </div>
    </div>
  );
};

export default WhyMe;
