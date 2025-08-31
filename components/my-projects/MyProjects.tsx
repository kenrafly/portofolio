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
    title: "ERP Management System",
    description:
      "Enterprise Resource Planning system with comprehensive business management features including inventory control, customer relationship management, financial reporting, and workflow automation for streamlined business operations.",
    image: "/portofolio/erp/photos/erp.png",
    tags: ["React", "Node.js", "PostgreSQL", "Material-UI", "Express"],
    demoLink: "#",
    codeLink: "#",
    gradient: "from-slate-500 to-gray-600",
  },
  {
    title: "Zentry - Awwwards Clone",
    description:
      "A stunning recreation of an Awwwards-winning website featuring advanced GSAP animations, smooth scrolling effects, and immersive visual experiences. Built with modern React and Vite for optimal performance and seamless user interactions.",
    image: "/portofolio/awwwards/photos/awwwards.png",
    tags: ["React", "GSAP", "Vite", "Animations", "Awwwards"],
    demoLink: "https://zentry-ruby-rho.vercel.app/",
    codeLink: "https://github.com/kenrafly/zentry",
    gradient: "from-violet-500 to-purple-600",
  },
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
    title: "Donghua MNY - Anime Platform",
    description:
      "A modern anime streaming platform with user authentication, video streaming, episode tracking, and community features. Built with Next.js and featuring a sleek design with advanced search and filtering capabilities.",
    image: "/portofolio/mny-next/photos/donghua.png",
    tags: ["Next.js", "TypeScript", "Streaming", "MongoDB", "Authentication"],
    demoLink: "https://www.donghuamny.com/",
    codeLink: "#",
    gradient: "from-pink-500 to-rose-600",
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
    title: "Next Blog Platform",
    description:
      "A modern blogging platform built with Next.js featuring markdown support, dynamic routing, SEO optimization, and responsive design. Includes features like post categorization, search functionality, and social sharing capabilities.",
    image: "/portofolio/blog-next/photos/blog.png",
    tags: ["Next.js", "Markdown", "SEO", "TypeScript", "Tailwind"],
    demoLink: "https://next-blog-worse.vercel.app/",
    codeLink: "https://github.com/kenrafly/next-blog-worse",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Stock Analysis Platform",
    description:
      "Advanced stock market analysis tool with real-time data visualization, technical indicators, and portfolio tracking. Features interactive charts, market news integration, and comprehensive financial analysis tools for informed investment decisions.",
    image: "/portofolio/stock/photos/stock.png",
    tags: ["React", "Chart.js", "API Integration", "Finance", "Analytics"],
    demoLink: "https://stock-analysis-beryl.vercel.app/analyze",
    codeLink: "https://github.com/kenrafly/StockAnalysis",
    gradient: "from-green-500 to-emerald-600",
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
      // Check if mobile
      const isMobile = window.innerWidth < 768;
      
      // Parallax background animation (desktop only)
      if (!isMobile) {
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
      }

      // Title character animation (simplified on mobile)
      const titleText = titleRef.current?.textContent || "";
      if (titleRef.current) {
        if (isMobile) {
          // Simple fade in on mobile
          gsap.fromTo(titleRef.current, {
            opacity: 0,
            y: 30
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
              end: "top 70%",
              scrub: 1
            }
          });
        } else {
          // Character animation on desktop
          titleRef.current.innerHTML = titleText
            .split("")
            .map(
              (char) =>
                `<span class="title-char inline-block">${
                  char === " " ? "&nbsp;" : char
                }</span>`
            )
            .join("");

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
        }
      }

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          y: isMobile ? 20 : 50,
          opacity: 0,
          filter: isMobile ? "blur(0px)" : "blur(10px)",
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

      // Project cards with simplified mobile animations
      const projectCards = gsap.utils.toArray(".project-card") as Element[];

      projectCards.forEach((card, index) => {
        const isEven = index % 2 === 0;

        if (isMobile) {
          // Simple fade in on mobile
          gsap.fromTo(card, {
            opacity: 0,
            y: 30
          }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 70%",
              scrub: 1
            }
          });
        } else {
          // Full animation on desktop
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

          // Magnetic hover effect (desktop only)
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
        }
      });

      // Floating particles animation (desktop only)
      if (!isMobile) {
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
      }

      // Tags animation (simplified on mobile)
      const tags = gsap.utils.toArray(".project-tag") as Element[];
      tags.forEach((tag, index) => {
        if (isMobile) {
          gsap.fromTo(tag, {
            opacity: 0,
            scale: 0.8
          }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: tag,
              start: "top 95%",
              end: "top 85%",
              scrub: 1
            }
          });
        } else {
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
        }
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
        <div className="floating-particle absolute top-40 left-8 sm:left-32 w-3 sm:w-5 h-3 sm:h-5 bg-purple-400 rounded-full opacity-60" />
        <div className="floating-particle absolute top-64 right-8 sm:right-40 w-4 sm:w-6 h-4 sm:h-6 border border-yellow-400 rounded-full opacity-40" />
        <div className="floating-particle absolute bottom-48 left-12 sm:left-48 w-5 sm:w-7 h-5 sm:h-7 bg-cyan-400 opacity-30" />
        <div className="floating-particle absolute bottom-40 right-8 sm:right-32 w-3 sm:w-5 h-3 sm:h-5 border border-purple-400 opacity-50" />
        <div className="floating-particle absolute top-1/2 left-4 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full opacity-70" />
        <div className="floating-particle absolute top-1/3 right-6 sm:right-24 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400 opacity-25" />
        <div className="floating-particle absolute top-2/3 left-1/4 w-3 sm:w-5 h-3 sm:h-5 border border-yellow-400 opacity-45" />
        <div className="floating-particle absolute bottom-1/4 right-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400 opacity-55" />
        <div className="floating-particle absolute top-1/4 right-12 sm:left-3/4 w-2 sm:w-3 h-2 sm:h-3 bg-red-400 opacity-60" />
        <div className="floating-particle absolute bottom-1/3 left-1/3 w-3 sm:w-4 h-3 sm:h-4 border border-cyan-400 opacity-40" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-400/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h1
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent leading-tight"
          >
            My Projects
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Innovative digital solutions crafted with cutting-edge technologies
            and attention to detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-700">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Icon */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-white text-sm sm:text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`space-y-3 sm:space-y-4 lg:space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`project-tag px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-medium rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-3 lg:pt-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="group relative px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-center text-sm sm:text-base"
                  >
                    <span className="relative z-10">View Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>

                  <Link
                    href={project.codeLink}
                    className="group px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border border-white/20 text-white font-medium rounded-full hover:border-purple-400/50 hover:bg-white/5 transition-all duration-500 hover:scale-105 text-center text-sm sm:text-base"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-24 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Let&apos;s collaborate and create something amazing together. From
              concept to deployment, I&apos;ll bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-sm sm:text-base"
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
