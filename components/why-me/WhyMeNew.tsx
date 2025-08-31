"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const colors = ["#FFD074", "#A374FF", "#17F1D1", "#00FFC2", "#FF6F91"];

// Modern word splitting with enhanced animations
const createAnimatedText = (text: string, className: string = "") => {
  return text.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className={`word inline-block ${className}`}>
      {word.split("").map((char, charIndex) => {
        const color = colors[(wordIndex + charIndex) % colors.length];
        return (
          <span
            key={charIndex}
            className="char inline-block"
            style={{
              color: color,
              textShadow: `0 0 20px ${color}40`,
            }}
          >
            {char}
          </span>
        );
      })}
      <span className="char inline-block">&nbsp;</span>
    </span>
  ));
};

const WhyMe = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topBarRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const floatingElementsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Modern parallax background animation
      gsap.to(backgroundRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Advanced text reveal with magnetic effect
      const chars = gsap.utils.toArray(".char") as Element[];

      // Initial state
      gsap.set(chars, {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "center bottom",
        filter: "blur(10px)",
      });

      // Main text animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1.5,
        },
      });

      tl.to(chars, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        filter: "blur(0px)",
        stagger: {
          amount: 1.2,
          from: "start",
          ease: "power2.out",
        },
        duration: 1,
        ease: "back.out(1.4)",
      });

      // Magnetic hover effect for characters
      chars.forEach((char, index) => {
        const element = char as Element;
        element.addEventListener("mouseenter", () => {
          const rotationValue = ((index % 5) - 2) * 15; // -30, -15, 0, 15, 30
          gsap.to(element, {
            scale: 1.3,
            y: -10,
            rotationZ: rotationValue,
            duration: 0.3,
            ease: "back.out(3)",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            y: 0,
            rotationZ: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });

      // Highlight words with morphing effect
      const highlightWords = gsap.utils.toArray(
        ".highlight .char"
      ) as Element[];

      gsap.to(highlightWords, {
        color: "#00FFC2",
        textShadow: "0 0 30px #00FFC2, 0 0 60px #00FFC2",
        scale: 1.1,
        stagger: 0.1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });

      // Modern top bar animation with elastic effects
      const topElements = topBarRef.current?.children || [];

      gsap.fromTo(
        topElements,
        {
          y: -50,
          opacity: 0,
          rotationY: 45,
          scale: 0.8,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
        }
      );

      // Floating elements animation
      const floatingElements = floatingElementsRef.current?.children || [];

      Array.from(floatingElements).forEach((element, index) => {
        const el = element as Element;
        const yOffset = ((index % 3) - 1) * 30; // -30, 0, or 30
        const xOffset = ((index % 3) - 1) * 20; // -20, 0, or 20
        const rotationValue = (index % 4) * 90 - 180; // -180, -90, 0, or 90
        const duration = 3 + (index % 4); // 3 to 6 seconds

        gsap.to(el, {
          y: yOffset,
          x: xOffset,
          rotation: rotationValue,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });

        // Interactive floating elements
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.5,
            rotation: "+=360",
            duration: 0.8,
            ease: "back.out(2)",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });

      // Social icons advanced hover effects
      const socialIcons = topBarRef.current?.querySelectorAll("a") || [];

      socialIcons.forEach((icon) => {
        const element = icon as Element;
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.4,
            rotationY: 360,
            backgroundColor: "#FFD074",
            borderRadius: "50%",
            padding: "8px",
            duration: 0.6,
            ease: "back.out(2)",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            rotationY: 0,
            backgroundColor: "transparent",
            padding: "0px",
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center bg-[#0E100F] text-white p-6 overflow-hidden border-b border-white min-h-screen"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #A374FF 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #17F1D1 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 0%",
        }}
      />

      {/* Floating Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 border border-purple-400 rounded-full opacity-40" />
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-cyan-400 opacity-30" />
        <div className="absolute bottom-20 right-20 w-5 h-5 border border-pink-400 opacity-50" />
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-green-400 rounded-full opacity-70" />
      </div>

      {/* Top Bar */}
      <div
        ref={topBarRef}
        className="relative z-10 flex flex-row sm:justify-between items-center justify-center w-full gap-4 mb-20"
      >
        <p className="text-white text-lg font-mono tracking-wide text-center glow-text">
          {"{ Why Me ? }"}
        </p>
        <div className="flex items-center justify-center border-white border rounded-full p-3 gap-3 hover:scale-105 transition-transform duration-200 backdrop-blur-sm bg-white/5">
          <Link
            href="https://www.instagram.com/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
          </Link>
          <Link
            href="https://github.com/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kenrafly"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </Link>
        </div>
        <div className="flex items-center justify-center border-white border rounded-full p-2 gap-2 backdrop-blur-sm bg-white/5">
          <MdMarkEmailUnread className="text-yellow-400" />
          <p className="text-sm break-all hidden sm:block text-gray-300">
            raflyardiansyahreal@gmail.com
          </p>
        </div>
      </div>

      {/* Enhanced Text Section */}
      <div
        ref={textRef}
        className="relative z-10 mt-24 max-w-6xl w-full leading-none text-left text-4xl md:text-6xl font-bold perspective-1000"
      >
        <h1 className="mb-8">
          {createAnimatedText(
            "I help startups and businesses build web apps that are fast, SEO-friendly, and fully custom."
          )}
        </h1>
        <h1 className="mt-6">
          {createAnimatedText("Built with ")}
          <span className="highlight">{createAnimatedText("React, ")}</span>
          <span className="highlight">{createAnimatedText("Next.js")}</span>
          {createAnimatedText(", and modern best practices.")}
        </h1>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 20px rgba(255, 208, 116, 0.5);
        }
        .social-icon:hover {
          text-shadow: 0 0 20px currentColor;
        }
        .char {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default WhyMe;
