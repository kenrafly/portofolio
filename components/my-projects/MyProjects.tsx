"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const data = [
  // Your project objects stay unchanged
  {
    title: "Donghua MNY",
    techStack:
      "Next.js, Tailwind CSS, React.js, MongoDB, Mongoose, Cloudinary, NextAuth, REST API, SSR",
    year: "2025",
    features: [
      "Role-Based Access Control (RBAC): Separate permissions for admin and user roles with protected route access.",
      "Secure User Authentication & Authorization: Handled with NextAuth and JWT to protect user data and access.",
      "Custom Admin Dashboard with Full CRUD: Manage movies, users, and platform settings efficiently.",
      "Optimized Performance: Fast load times with lazy loading, image compression, and code splitting.",
      "SEO-Ready Pages: Server-side rendering with meta tag optimization for better search engine indexing.",
      "Advanced Movie Search & Filter: Filter movies by genre, keyword, and popularity with paginated results.",
      "Cloud Media Uploads: Secure and scalable image storage using Cloudinary.",
      "Responsive Dark-Themed UI: Immersive, mobile-friendly layout using Tailwind CSS with dark mode support.",
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
      "User Authentication: Secure login and registration using NextAuth.js.",
      "Product Browsing & Details: View product listings with dynamic detail pages.",
      "Shopping Cart & Checkout: Add to cart and place orders with real-time updates.",
      "Multiple Payment Methods: Integrated PayPal, Stripe, and Cash on Delivery options.",
      "Admin Dashboard: Manage products, orders, and users from a secure admin panel.",
      "Image Uploads: Upload product images securely using Uploadthing.",
      "Email Notifications: Send order confirmations using Resend API.",
      "Latest Products Section: Display recent products dynamically using env limits.",
      "Environment Configuration: Secure secrets and API keys through .env file.",
      "Responsive UI: Fully responsive layout using Tailwind CSS and React components.",
    ],
    imageUrl: "/portofolio/prostore-next/prostore.png",
    link: "https://github.com/kenrafly/prostore-main",
  },
  {
    title: "Zentry",
    techStack: "Vite, Tailwind CSS, GSAP, React.js",
    year: "2024",
    features: [
      "Immersive GSAP Animations: Smooth, timeline-based animations for a visually engaging experience.",
      "Lightning-Fast Performance: Built with Vite for near-instant bundling and page loads.",
      "Creative Hero Sections: Scroll-triggered and entrance animations for premium Awwwards-style UI.",
      "Component-Based Design: Reusable and clean React components for scalability and maintainability.",
      "Optimized Code Structure: Modular setup and clean file structure for developer efficiency.",
      "SEO-Ready Setup: Meta tag support and semantic HTML for discoverability.",
      "Interactive UI Elements: Mouse-follow effects, animated menus, and fluid transitions.",
      "Modern Development Workflow: Fast development and HMR (Hot Module Replacement) with Vite.",
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
      "User Authentication: Secure login and registration using OAuth for streamlined access.",
      "Expense and Income Tracking: Easily add, edit, and categorize expenses and income with real-time updates.",
      "Dashboard and Analytics: Interactive dashboard displaying financial summaries with visual charts and trends.",
      "Budget Management: Set monthly budget goals and monitor category-wise spending against limits.",
      "Data Visualization: Graphs and pie charts powered by Chart.js for intuitive financial insights.",
      "Responsive UI: Mobile-first, clean interface designed with Tailwind CSS.",
      "MongoDB Integration: Fast and scalable data storage using Mongoose and MongoDB.",
      "Protected Routes: Pages and features secured based on authentication state.",
      "RESTful API: Clean and scalable endpoints for all income/expense operations.",
      "Dark Mode Ready: Switch between light and dark themes for better user comfort.",
    ],
    imageUrl: "/portofolio/finfly-next/pictures/finfly.png",
    link: "https://finly-tsms.vercel.app",
  },
  {
    title: "Blog",
    techStack:
      "Next.js, Tailwind CSS, React.js, MongoDB, Mongoose, Markdown, REST API",
    year: "2025",
    features: [
      "Content Management System: Admin can create, update, and delete blog posts with a rich markdown editor.",
      "User Authentication: Secure login system for admin access to protected routes.",
      "Dynamic Blog Routing: SEO-friendly dynamic routes for each blog post using Next.js App Router.",
      "Markdown Support: Write posts in markdown and render them beautifully with syntax highlighting.",
      "Tag and Category Filtering: Organize and filter posts by tags or categories for better discoverability.",
      "Full-Text Search: Fast and responsive search functionality for blog titles and content.",
      "Comments System: Readers can leave comments on each blog post (optional integration).",
      "Responsive Design: Fully mobile-friendly layout with smooth navigation.",
      "Dark Mode: Toggleable dark/light mode for better readability.",
      "SEO Optimization: Meta tags, Open Graph, and structured data for improved search visibility.",
    ],
    imageUrl: "/portofolio/blog-next/photos/blog.png",
    link: "https://next-blog-worse.vercel.app/",
  },
  {
    title: "Real Estate Booking",
    techStack:
      "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Cloudinary, Mapbox, REST API",
    year: "2025",
    features: [
      "Property Listings: Browse properties with images, prices, and descriptions in a clean UI.",
      "Advanced Filtering: Filter properties by location, price range, property type, and amenities.",
      "Interactive Map Integration: View property locations with Mapbox markers for better spatial understanding.",
      "User Authentication: Secure login and registration with protected routes and JWT.",
      "Real-Time Booking System: Users can schedule property visits or book properties directly.",
      "Admin Panel: Admins can manage properties, bookings, and users with full CRUD operations.",
      "Cloud-Based Image Uploads: Upload and manage property images using Cloudinary.",
      "Responsive Design: Tailwind-powered UI that adapts to all screen sizes and devices.",
      "SEO Optimization: SEO-friendly property URLs and meta tags for better search engine visibility.",
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
      "Restaurant Listings: Browse a variety of restaurants with menus, ratings, and delivery times.",
      "Menu & Cart System: Add items to cart, customize orders, and view live cart updates.",
      "User Authentication: Secure signup/login using JWT with protected user and admin routes.",
      "Real-Time Order Tracking: Track order status from preparation to delivery (via status updates).",
      "Admin Dashboard: Manage restaurants, products, and orders with full CRUD access.",
      "Search & Filter: Search for dishes or filter by cuisine, price, or rating.",
      "Responsive UI: Fully responsive design for mobile-first food ordering experience.",
      "Image Uploads: Upload food and restaurant images using Cloudinary.",
      "Checkout with Payment Integration: Supports online payments or cash on delivery (Stripe/PayPal ready).",
      "SEO Optimized Pages: Meta tags and semantic routes for restaurants and food items.",
    ],
    imageUrl: "/portofolio/food-del/images/food-del.png",
    link: "https://github.com/kenrafly/food-del",
  },
  {
    title: "SaaS Landing Page",
    techStack: "Vite, React.js, Tailwind CSS, Framer Motion",
    year: "2025",
    features: [
      "Animated Hero Section: Smooth entrance and scroll-based animations using Framer Motion.",
      "Responsive Layout: Mobile-first, pixel-perfect UI built with Tailwind CSS.",
      "Pricing Section: Clean and clear pricing plans with animated hover effects.",
      "Testimonials Carousel: Animated feedback from users to build trust and credibility.",
      "Call-To-Action Blocks: Strategically placed CTAs to drive conversions.",
      "Framer Motion Transitions: Seamless page and section transitions for modern feel.",
      "Modular Components: Reusable, well-structured React components for scalability.",
      "Dark Mode Support: Easily toggle between light and dark themes.",
      "Performance Optimized: Built with Vite for ultra-fast loading and HMR.",
      "SEO Friendly: Semantic HTML, meta tags, and clean URLs for better visibility.",
    ],
    imageUrl: "/portofolio/SaaS/photos/saas.png",
    link: "https://saasanimate.vercel.app/",
  },
  {
    title: "Stock Analysis App",
    techStack: "Vite, React.js, Tailwind CSS, TradingView API",
    year: "2025",
    features: [
      "Real-Time Market Charts: Embedded TradingView charts showing live stock prices and technical indicators.",
      "Symbol Search: Users can search and view detailed charts for any stock ticker.",
      "Responsive UI: Clean, mobile-first design built with Tailwind CSS.",
      "Watchlist Component: Add favorite stocks to a personal watchlist (local state).",
      "Technical Indicator Integration: Users can toggle indicators like RSI, MACD, Bollinger Bands.",
      "Custom Chart Layout: Interactive TradingView widget customized for dark mode and branding.",
      "News Section: Embedded TradingView news stream widget for stock-specific headlines.",
      "Performance Optimized: Built with Vite for lightning-fast load and hot module reload.",
      "Simple Routing: SPA-style layout with clean navigation between chart and info views.",
      "Frontend Only: No backend — fully powered by TradingView APIs and client-side logic.",
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
