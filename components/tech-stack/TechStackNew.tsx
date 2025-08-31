"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface TechItem {
  name: string;
  icon: string;
  category: string;
  description: string;
  gradient: string;
  shadowColor: string;
}

const techStack: TechItem[] = [
  {
    name: "React",
    icon: "/techStack/react.svg",
    category: "Frontend",
    description: "Building interactive UIs",
    gradient: "from-blue-400 to-cyan-600",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "Next.js",
    icon: "/techStack/nextjs.svg",
    category: "Frontend",
    description: "Full-stack React framework",
    gradient: "from-black to-gray-800",
    shadowColor: "shadow-gray-500/50",
  },
  {
    name: "TypeScript",
    icon: "/techStack/typescript.svg",
    category: "Frontend",
    description: "Type-safe JavaScript",
    gradient: "from-blue-600 to-blue-800",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "Tailwind CSS",
    icon: "/techStack/tailwind.svg",
    category: "Frontend",
    description: "Utility-first CSS framework",
    gradient: "from-cyan-400 to-teal-600",
    shadowColor: "shadow-cyan-500/50",
  },
  {
    name: "Node.js",
    icon: "/techStack/nodejs.svg",
    category: "Backend",
    description: "JavaScript runtime environment",
    gradient: "from-green-400 to-green-600",
    shadowColor: "shadow-green-500/50",
  },
  {
    name: "Express.js",
    icon: "/techStack/express.svg",
    category: "Backend",
    description: "Fast Node.js web framework",
    gradient: "from-gray-600 to-gray-800",
    shadowColor: "shadow-gray-500/50",
  },
  {
    name: "MongoDB",
    icon: "/techStack/mongodb.svg",
    category: "Database",
    description: "NoSQL document database",
    gradient: "from-green-500 to-green-700",
    shadowColor: "shadow-green-500/50",
  },
  {
    name: "SQL",
    icon: "/techStack/sql.svg",
    category: "Database",
    description: "Relational database language",
    gradient: "from-orange-400 to-red-600",
    shadowColor: "shadow-orange-500/50",
  },
  {
    name: "Prisma",
    icon: "/techStack/prisma.svg",
    category: "Database",
    description: "Modern database toolkit",
    gradient: "from-purple-500 to-blue-600",
    shadowColor: "shadow-purple-500/50",
  },
  {
    name: "Git",
    icon: "/techStack/git.svg",
    category: "Tools",
    description: "Version control system",
    gradient: "from-orange-500 to-red-600",
    shadowColor: "shadow-orange-500/50",
  },
  {
    name: "GitHub",
    icon: "/techStack/github.svg",
    category: "Tools",
    description: "Code hosting platform",
    gradient: "from-gray-700 to-black",
    shadowColor: "shadow-gray-500/50",
  },
  {
    name: "Python",
    icon: "/techStack/python.svg",
    category: "Language",
    description: "Versatile programming language",
    gradient: "from-yellow-400 to-blue-600",
    shadowColor: "shadow-yellow-500/50",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Language",
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredTech, setFilteredTech] = useState(techStack);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredTech(techStack);
    } else {
      setFilteredTech(
        techStack.filter((tech) => tech.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(backgroundRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title character animation
      const titleText = titleRef.current?.textContent || "";
      if (titleRef.current) {
        titleRef.current.innerHTML = titleText
          .split("")
          .map(
            (char) =>
              `<span class="title-char inline-block">${
                char === " " ? "&nbsp;" : char
              }</span>`
          )
          .join("");
      }

      const titleChars = gsap.utils.toArray(".title-char") as Element[];

      gsap.fromTo(
        titleChars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          filter: "blur(0px)",
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.5,
          },
        }
      );

      // Subtitle fade in
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 1.5,
          },
        }
      );

      // Tech cards animation
      const techCards = gsap.utils.toArray(".tech-card") as Element[];

      techCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            scale: 0.8,
            rotationY: -30,
            filter: "blur(10px)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1.5,
            },
          }
        );
      });

      // Floating particles
      const particles = gsap.utils.toArray(".floating-particle") as Element[];
      particles.forEach((particle, index) => {
        const yOffset = ((index % 3) - 1) * 40;
        const xOffset = ((index % 3) - 1) * 30;
        const rotationValue = (index % 4) * 90;
        const duration = 5 + (index % 3);

        gsap.to(particle, {
          y: yOffset,
          x: xOffset,
          rotation: rotationValue,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.7,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredTech]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white overflow-hidden border-t border-white/10"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, #825DCC 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #17F1D1 0%, transparent 50%)
          `,
          backgroundSize: "300% 300%",
          backgroundPosition: "50% 0%",
        }}
      />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-particle absolute top-32 left-24 w-4 h-4 bg-purple-400 rounded-full opacity-60" />
        <div className="floating-particle absolute top-48 right-32 w-5 h-5 border border-yellow-400 rounded-full opacity-40" />
        <div className="floating-particle absolute bottom-40 left-40 w-6 h-6 bg-cyan-400 opacity-30" />
        <div className="floating-particle absolute bottom-32 right-24 w-4 h-4 border border-purple-400 opacity-50" />
        <div className="floating-particle absolute top-1/2 left-16 w-3 h-3 bg-yellow-400 rounded-full opacity-70" />
        <div className="floating-particle absolute top-1/3 right-20 w-5 h-5 bg-cyan-400 opacity-25" />
        <div className="floating-particle absolute top-2/3 left-1/4 w-4 h-4 border border-yellow-400 opacity-45" />
        <div className="floating-particle absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 opacity-55" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-400/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent leading-tight"
          >
            Tech Stack
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cutting-edge technologies and tools I use to build exceptional
            digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="tech-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <div className="relative w-full h-full bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.gradient} text-white mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  {tech.category}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {tech.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Floating Icon on Hover */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 group">
              <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                12+
              </div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 group">
              <div className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <div className="text-4xl font-black text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-300">Projects Built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tech-card:hover .relative {
          transform: rotateY(5deg);
        }
        .floating-particle {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
