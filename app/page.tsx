import Hero from "@/components/hero/Hero";
//import SplashCursor from "@/components/ui/text";
import WhyMe from "@/components/why-me/WhyMe";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0E100F] pt-20">
      {/* <SplashCursor /> */}
      <Hero />
      <WhyMe />
    </div>
  );
};

export default page;
