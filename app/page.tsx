import Hero from "@/components/hero/Hero";
import SplashCursor from "@/components/ui/text";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0E100F] pt-20">
      <SplashCursor />
      <Hero />
    </div>
  );
};

export default page;
