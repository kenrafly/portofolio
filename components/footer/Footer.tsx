"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if mobile
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // Animate title
        gsap.fromTo(titleRef.current, {
          y: 50,
          opacity: 0,
          scale: 0.9
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1.5
          }
        });

        // Animate content sections
        const sections = gsap.utils.toArray(".footer-section") as Element[];
        sections.forEach((section, index) => {
          gsap.fromTo(section, {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              end: "top 75%",
              scrub: 1
            }
          });
        });
      }

      // Floating background elements
      const floatingElements = gsap.utils.toArray(".floating-bg") as Element[];
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: (index % 2 === 0 ? -20 : 20),
          x: (index % 2 === 0 ? 10 : -10),
          rotation: (index % 2 === 0 ? 5 : -5),
          duration: 4 + (index % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] border-t border-white/10 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="floating-bg absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl"
        />
        <div 
          className="floating-bg absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"
        />
        <div 
          className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">I build like it&apos;s mine.</p>
              <h1 
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#17F1D1] via-cyan-400 to-[#17F1D1] bg-clip-text text-transparent leading-tight"
              >
                kenrafly
              </h1>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
                Ready to bring your next project to life? Let&apos;s create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  <span>Get In Touch</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border border-white/20 text-white font-medium rounded-full hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  <span>View Projects</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            
            {/* Navigation */}
            <div className="footer-section space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#FFD074] mb-3 sm:mb-4">Navigate</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-sm sm:text-base text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects" 
                    className="text-sm sm:text-base text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-sm sm:text-base text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-section space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#FFD074] mb-3 sm:mb-4">Connect</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link 
                    href="https://github.com/kenrafly"
                    target="_blank"
                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://linkedin.com/in/kenrafly"
                    target="_blank"
                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://instagram.com/kenrafly"
                    target="_blank"
                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="mailto:rafly.portfolio@gmail.com"
                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Email</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services/Skills */}
            <div className="footer-section space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#FFD074] mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-sm sm:text-base text-gray-300">Web Development</li>
                <li className="text-sm sm:text-base text-gray-300">Full-Stack Solutions</li>
                <li className="text-sm sm:text-base text-gray-300">UI/UX Design</li>
                <li className="text-sm sm:text-base text-gray-300">Mobile Apps</li>
                <li className="text-sm sm:text-base text-gray-300">API Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2025 Kenrafly. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Built with Next.js & TypeScript
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-400">Available for projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .floating-bg {
          pointer-events: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
