"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "FinFly - Financial Management",
    description:
      "A comprehensive financial management platform with real-time analytics, budget tracking, and investment portfolio management. Features include expense categorization, financial goal setting, and automated reporting with beautiful data visualizations.",
    image: "/portofolio/finfly-next/pictures/finfly.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "Prisma"],
    demoLink: "https://finfly-next.vercel.app",
    codeLink: "#",
    gradient: "from-emerald-500 to-blue-600",
  },
  {
    title: "ProStore - E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced product management, secure payment processing, and real-time inventory tracking. Includes features like wishlist, shopping cart persistence, order tracking, and responsive design for optimal user experience.",
    image: "/portofolio/prostore-next/prostore.png",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind", "Redux"],
    demoLink: "https://prostore-next-xi.vercel.app",
    codeLink: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Food Delivery App",
    description:
      "Full-stack food delivery application with restaurant management, order tracking, and payment integration. Features include real-time order updates, GPS tracking, rating system, and admin dashboard for comprehensive restaurant management.",
    image: "/portofolio/food-del/images/food-del.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    demoLink: "https://food-del-frontend-flame.vercel.app",
    codeLink: "#",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Coffee Shop Website",
    description:
      "Elegant coffee shop website with menu showcase, online ordering system, and location finder. Includes features like product customization, loyalty program integration, and responsive design optimized for mobile ordering experience.",
    image: "/portofolio/coffee/photos/Screenshot (866).png",
    tags: ["React", "CSS3", "JavaScript", "Firebase", "Leaflet"],
    demoLink: "#",
    codeLink: "#",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator. Features advanced search filters, map integration, property comparison tools, and agent management system for seamless property transactions.",
    image: "/portofolio/realestate/photos/real-estate.png",
    tags: ["Next.js", "TypeScript", "Mapbox", "Prisma", "AWS"],
    demoLink: "#",
    codeLink: "#",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Advanced analytics dashboard for SaaS businesses with real-time metrics, user behavior tracking, and revenue analytics. Includes features like custom reports, data export, API integrations, and role-based access control.",
    image: "/portofolio/SaaS/photos/saas.png",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    demoLink: "#",
    codeLink: "#",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const MyProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background animation
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

      // Subtitle animation
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

      // Project cards with alternating animations
      const projectCards = gsap.utils.toArray(".project-card") as Element[];

      projectCards.forEach((card, index) => {
        const isEven = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            x: isEven ? -100 : 100,
            y: 80,
            opacity: 0,
            scale: 0.8,
            rotationY: isEven ? -20 : 20,
            filter: "blur(15px)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 2,
            },
          }
        );

        // Magnetic hover effect
        const cardElement = card as HTMLElement;
        cardElement.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: isEven ? 5 : -5,
            z: 50,
            duration: 0.6,
            ease: "back.out(2)",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        });
      });

      // Floating particles animation
      const particles = gsap.utils.toArray(".floating-particle") as Element[];
      particles.forEach((particle, index) => {
        const yOffset = ((index % 3) - 1) * 50;
        const xOffset = ((index % 3) - 1) * 40;
        const rotationValue = (index % 4) * 90;
        const duration = 6 + (index % 3);

        gsap.to(particle, {
          y: yOffset,
          x: xOffset,
          rotation: rotationValue,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.8,
        });
      });

      // Tags animation on scroll
      const tags = gsap.utils.toArray(".project-tag") as Element[];
      tags.forEach((tag, index) => {
        gsap.fromTo(
          tag,
          {
            scale: 0,
            opacity: 0,
            rotation: -45,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(2)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: tag,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
          }
        );
      });
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
            radial-gradient(circle at 30% 20%, #825DCC 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, #17F1D1 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, #FF6B6B 0%, transparent 50%)
          `,
          backgroundSize: "400% 400%",
          backgroundPosition: "50% 0%",
        }}
      />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-particle absolute top-40 left-32 w-5 h-5 bg-purple-400 rounded-full opacity-60" />
        <div className="floating-particle absolute top-64 right-40 w-6 h-6 border border-yellow-400 rounded-full opacity-40" />
        <div className="floating-particle absolute bottom-48 left-48 w-7 h-7 bg-cyan-400 opacity-30" />
        <div className="floating-particle absolute bottom-40 right-32 w-5 h-5 border border-purple-400 opacity-50" />
        <div className="floating-particle absolute top-1/2 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-70" />
        <div className="floating-particle absolute top-1/3 right-24 w-6 h-6 bg-cyan-400 opacity-25" />
        <div className="floating-particle absolute top-2/3 left-1/4 w-5 h-5 border border-yellow-400 opacity-45" />
        <div className="floating-particle absolute bottom-1/4 right-1/3 w-4 h-4 bg-purple-400 opacity-55" />
        <div className="floating-particle absolute top-1/4 left-3/4 w-3 h-3 bg-red-400 opacity-60" />
        <div className="floating-particle absolute bottom-1/3 left-1/3 w-4 h-4 border border-cyan-400 opacity-40" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-400/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent leading-tight"
          >
            My Projects
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Innovative digital solutions crafted with cutting-edge technologies
            and attention to detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{
                gridTemplateColumns: index % 2 === 1 ? "1fr 1fr" : "1fr 1fr",
              }}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-700">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-white text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`project-tag px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                  >
                    <span className="relative z-10">View Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>

                  <Link
                    href={project.codeLink}
                    className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-purple-400/50 hover:bg-white/5 transition-all duration-500 hover:scale-105"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate and create something amazing together. From
              concept to deployment, I&apos;ll bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .project-card:hover .relative {
          transform: perspective(1000px) rotateY(2deg);
        }
        .floating-particle {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default MyProjects;
