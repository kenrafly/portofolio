import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import TeachStack from "@/components/tech-stack/TeachStack";
import Testimonial from "@/components/testimonial/Testimonial";
import SplashCursor from "@/components/ui/text";

//import SplashCursor from "@/components/ui/text";
import WhyMe from "@/components/why-me/WhyMe";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0E100F] pt-20">
      <SplashCursor />
      <Hero />
      <WhyMe />
      <TeachStack />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default page;
