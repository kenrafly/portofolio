"use client";

import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          filter: "blur(15px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 2,
          },
        }
      );

      // Form fields animation
      const formFields = gsap.utils.toArray(".form-field") as Element[];
      formFields.forEach((field, index) => {
        gsap.fromTo(
          field,
          {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: field,
              start: "top 90%",
              end: "top 70%",
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
          delay: index * 0.6,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Rafly",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Success animation
      gsap.to(formRef.current, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");

      // Error shake animation
      gsap.to(formRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
      });
      gsap.set(formRef.current, { x: 0, delay: 0.6 });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            radial-gradient(circle at 25% 30%, #825DCC 0%, transparent 50%),
            radial-gradient(circle at 75% 70%, #FFD074 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #17F1D1 0%, transparent 50%)
          `,
          backgroundSize: "250% 250%",
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
            Let&apos;s Connect
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your vision to life? Drop me a message and let&apos;s
            create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      rafly.portfolio@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white font-medium">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Social Media</p>
                    <p className="text-white font-medium">@rafly.dev</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-white">
                Quick Response
              </h4>
              <p className="text-gray-300">
                I typically respond within 24 hours. For urgent inquiries, feel
                free to reach out via WhatsApp.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 space-y-6"
            >
              {/* Name Field */}
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project idea..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}

                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300">
                  ❌ Failed to send message. Please try again or contact me
                  directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 group">
            <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              &lt;24h
            </div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 group">
            <div className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-300">Client Satisfaction</div>
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
        .floating-particle {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
