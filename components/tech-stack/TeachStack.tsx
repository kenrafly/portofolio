"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { src: "/techStack/react.svg", alt: "React" },
  { src: "/techStack/nextjs.svg", alt: "Next.js" },
  { src: "/techStack/typescript.svg", alt: "TypeScript" },
  { src: "/techStack/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/techStack/nodejs.svg", alt: "Node.js" },
  { src: "/techStack/express.svg", alt: "Express.js" },
  { src: "/techStack/mongodb.svg", alt: "MongoDB" },
  { src: "/techStack/git.svg", alt: "Git" },
  { src: "/techStack/github.svg", alt: "GitHub" },
  { src: "/techStack/react.svg", alt: "React" },
  { src: "/techStack/nextjs.svg", alt: "Next.js" },
  { src: "/techStack/typescript.svg", alt: "TypeScript" },
  { src: "/techStack/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/techStack/nodejs.svg", alt: "Node.js" },
  { src: "/techStack/express.svg", alt: "Express.js" },
  { src: "/techStack/mongodb.svg", alt: "MongoDB" },
  { src: "/techStack/git.svg", alt: "Git" },
  { src: "/techStack/github.svg", alt: "GitHub" },
];

const TechStack = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate the marquee (unchanged)
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-=${totalWidth}`,
      duration: 10,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Animate heading and subheading
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden bg-[#0E100F] text-white py-24  ">
      <h1
        ref={titleRef}
        className="text-5xl font-bold mb-6 text-center text-[#825DCC]"
      >
        My Tech Stack
      </h1>
      <h2
        ref={subtitleRef}
        className="text-xl text-center p-4 md:p-16 mx-auto text-gray-300"
      >
        My expertise spans a diverse range of technologies, enabling me to
        deliver comprehensive and cutting-edge solutions across various
        platforms.
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max gap-10 will-change-transform"
        >
          {[...icons, ...icons].map((icon, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full p-4 shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <Image src={icon.src} alt={icon.alt} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
