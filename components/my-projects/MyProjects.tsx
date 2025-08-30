"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const data = [
  {
    title: "Enterprise Resource Planning (ERP) System",
    techStack:
      "Next.js 14 | TypeScript | Prisma ORM | PostgreSQL | Tailwind CSS | Recharts | NextAuth.js",
    year: "2024",
    features: [
      "Financial analytics dashboard",
      "Inventory management",
      "Sales workflow automation",
      "Role-based access control",
      "Business intelligence dashboards",
    ],
    imageUrl: "/portofolio/erp/photos/erp.png",
    link: "#",
  },
  {
    title: "Donghua MNY",
    techStack:
      "Next.js, Tailwind CSS, React.js, MongoDB, Mongoose, Cloudinary, NextAuth, REST API, SSR",
    year: "2025",
    features: [
      "User authentication & authorization",
      "Admin dashboard with CRUD operations",
      "Movie search & filtering",
      "Cloud media storage",
      "Responsive dark theme UI",
    ],
    imageUrl: "/portofolio/mny-next/photos/donghua.png",
    link: "https://donghuamny.com",
  },
  {
    title: "Prostore E-commerce",
    techStack:
      "Next.js, Tailwind CSS, React.js, PostgreSQL, Prisma, NextAuth.js, Stripe, PayPal, REST API",
    year: "2025",
    features: [
      "User authentication system",
      "Product browsing & cart",
      "Multiple payment options",
      "Admin dashboard",
      "Email notifications",
    ],
    imageUrl: "/portofolio/prostore-next/prostore.png",
    link: "https://github.com/kenrafly/prostore-main",
  },
  {
    title: "Zentry",
    techStack: "Vite, Tailwind CSS, GSAP, React.js",
    year: "2024",
    features: [
      "GSAP animations",
      "Scroll-triggered effects",
      "Interactive UI elements",
      "Modern design system",
      "Performance optimized",
    ],
    imageUrl: "/portofolio/awwwards/photos/awwwards.png",
    link: "https://zentry-ruby-rho.vercel.app/",
  },
  {
    title: "Finfly",
    techStack:
      "Next.js, Tailwind CSS, React.js, MongoDB, Mongoose, OAuth, Chart.js, REST API",
    year: "2025",
    features: [
      "Expense & income tracking",
      "Interactive dashboard",
      "Budget management",
      "Data visualization",
      "OAuth authentication",
    ],
    imageUrl: "/portofolio/finfly-next/pictures/finfly.png",
    link: "https://finly-tsms.vercel.app",
  },
  {
    title: "Blog Platform",
    techStack:
      "Next.js, Tailwind CSS, React.js, MongoDB, Mongoose, Markdown, REST API",
    year: "2025",
    features: [
      "Markdown editor",
      "Dynamic routing",
      "Tag & category filtering",
      "Search functionality",
      "SEO optimization",
    ],
    imageUrl: "/portofolio/blog-next/photos/blog.png",
    link: "https://next-blog-worse.vercel.app/",
  },
  {
    title: "Real Estate Platform",
    techStack:
      "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Cloudinary, Mapbox, REST API",
    year: "2025",
    features: [
      "Property listings",
      "Advanced filtering",
      "Interactive maps",
      "Booking system",
      "Admin panel",
    ],
    imageUrl: "/portofolio/realestate/photos/real-estate.png",
    link: "https://github.com/kenrafly/realestate",
  },
  {
    title: "Food Delivery App",
    techStack:
      "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Cloudinary, JWT, REST API",
    year: "2025",
    features: [
      "Restaurant listings",
      "Cart & checkout system",
      "Order tracking",
      "Admin dashboard",
      "Payment integration",
    ],
    imageUrl: "/portofolio/food-del/images/food-del.png",
    link: "https://github.com/kenrafly/food-del",
  },
  {
    title: "SaaS Landing Page",
    techStack: "Vite, React.js, Tailwind CSS, Framer Motion",
    year: "2025",
    features: [
      "Animated hero section",
      "Pricing plans",
      "Testimonials carousel",
      "Smooth transitions",
      "Dark mode support",
    ],
    imageUrl: "/portofolio/SaaS/photos/saas.png",
    link: "https://saasanimate.vercel.app/",
  },
  {
    title: "Stock Analysis Tool",
    techStack: "Vite, React.js, Tailwind CSS, TradingView API",
    year: "2025",
    features: [
      "Real-time market charts",
      "Symbol search",
      "Technical indicators",
      "Watchlist management",
      "News integration",
    ],
    imageUrl: "/portofolio/stock/photos/stock.png",
    link: "https://stock-analysis-beryl.vercel.app/",
  },
];

const MyProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="pt-16 px-6">
      <h1 className="text-6xl font-bold pt-20 border-b border-gray-400 p-4">
        My Projects
      </h1>

      {data.slice(0, visibleCount).map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-between gap-7 p-4 border border-gray-600 rounded-xl mt-4 ${
              isEven ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full h-96">
              <Image
                src={project.imageUrl}
                alt="Project Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-semibold">{project.title}</h2>
                  <p className="text-gray-500">{project.techStack}</p>
                </div>
                <p className="mt-4 text-gray-700">{project.year}</p>
              </div>
              <div className="flex flex-col mt-4 justify-between h-full">
                <ul className="list-disc list-inside text-white space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xl">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-white hover:bg-yellow-500 transition-all duration-100 text-center border border-gray-500 p-2 rounded-lg mt-4"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {visibleCount < data.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
