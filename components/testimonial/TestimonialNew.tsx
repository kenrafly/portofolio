"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Modern parallax background
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

      // Advanced title animation with character splitting
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

      // Profile image 3D reveal with magnetic effect
      gsap.fromTo(
        profileRef.current,
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
          },
        }
      );

      // Quote text character-by-character reveal
      const quoteText = quoteRef.current?.textContent || "";
      if (quoteRef.current) {
        quoteRef.current.innerHTML = quoteText
          .split("")
          .map((char, index) => {
            const isHighlight =
              char === '"' || (index > 0 && quoteText[index - 1] === '"');
            return `<span class="quote-char ${
              isHighlight ? "highlight-char" : ""
            } inline-block">${char === " " ? "&nbsp;" : char}</span>`;
          })
          .join("");
      }

      const quoteChars = gsap.utils.toArray(".quote-char") as Element[];

      gsap.fromTo(
        quoteChars,
        {
          y: 50,
          opacity: 0,
          rotationX: -45,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          filter: "blur(0px)",
          stagger: 0.01,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 1.5,
          },
        }
      );

      // Author info slide-up animation
      gsap.fromTo(
        authorRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: authorRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 1.5,
          },
        }
      );

      // Floating particles animation
      const particles = gsap.utils.toArray(".floating-particle") as Element[];
      particles.forEach((particle, index) => {
        const yOffset = ((index % 3) - 1) * 30;
        const xOffset = ((index % 3) - 1) * 20;
        const rotationValue = (index % 4) * 90;
        const duration = 4 + (index % 3);

        gsap.to(particle, {
          y: yOffset,
          x: xOffset,
          rotation: rotationValue,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Interactive hover effects for profile image
      const profileImage = profileRef.current;
      if (profileImage) {
        profileImage.addEventListener("mouseenter", () => {
          gsap.to(profileImage, {
            scale: 1.1,
            rotationY: 15,
            z: 50,
            boxShadow: "0 25px 50px rgba(130, 93, 204, 0.4)",
            duration: 0.6,
            ease: "back.out(2)",
          });
        });

        profileImage.addEventListener("mouseleave", () => {
          gsap.to(profileImage, {
            scale: 1,
            rotationY: 0,
            z: 0,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            duration: 0.6,
            ease: "power2.out",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
            radial-gradient(circle at 20% 30%, #825DCC 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #17F1D1 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 0%",
        }}
      />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-particle absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-60" />
        <div className="floating-particle absolute top-40 right-32 w-4 h-4 border border-yellow-400 rounded-full opacity-40" />
        <div className="floating-particle absolute bottom-32 left-32 w-5 h-5 bg-cyan-400 opacity-30" />
        <div className="floating-particle absolute bottom-20 right-20 w-3 h-3 border border-purple-400 opacity-50" />
        <div className="floating-particle absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-70" />
        <div className="floating-particle absolute top-1/3 right-16 w-4 h-4 bg-cyan-400 opacity-25" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-yellow-400/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Modern Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-8xl font-black text-left mb-16 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent leading-tight"
        >
          What my clients say
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Section */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div ref={profileRef} className="relative group perspective-1000">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-110" />

              {/* Profile Image Container */}
              <div className="relative w-60 h-60 md:w-80 md:h-80 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 rounded-full animate-pulse" />
                <Image
                  src="/profile.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover rounded-full shadow-2xl border-4 border-white/10 group-hover:border-purple-400/50 transition-all duration-500"
                />

                {/* Floating Ring */}
                <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative">
              {/* Quote Background Accent */}
              <div className="absolute -top-4 -left-4 text-8xl text-purple-400/20 font-bold">
                &ldquo;
              </div>

              <h2
                ref={quoteRef}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-relaxed relative z-10"
              >
                Working with Rafly was a game-changer. He built a
                lightning-fast, professional website that made my{" "}
                <span className="text-purple-400 glow-text">business</span> more
                visible and profitable. What impressed me most is how he treated
                my project like it was his own with{" "}
                <span className="text-purple-400 glow-text">care,</span>{" "}
                <span className="text-yellow-400 glow-text">strategy,</span>{" "}
                <span className="text-cyan-400 glow-text">and passion.</span>
              </h2>

              {/* Quote End Accent */}
              <div className="absolute -bottom-4 -right-4 text-8xl text-cyan-400/20 font-bold">
                &rdquo;
              </div>
            </div>

            {/* Author Info */}
            <div ref={authorRef} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                <div>
                  <p className="text-xl font-bold text-white mb-1">M R H.R</p>
                  <p className="text-lg text-gray-300">
                    founder of{" "}
                    <Link
                      className="text-purple-400 hover:text-cyan-400 transition-colors duration-300 underline decoration-purple-400/50 hover:decoration-cyan-400/50 underline-offset-4"
                      target="_blank"
                      href="https://donghuamny.com"
                    >
                      donghuamny.com
                    </Link>
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    ⭐
                  </div>
                ))}
                <span className="ml-2 text-gray-300 font-medium">
                  5.0 Rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 group">
            <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 group">
            <div className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
            <div className="text-4xl font-black text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
