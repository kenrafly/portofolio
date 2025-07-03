import Footer from "@/components/footer/Footer";
import MyProjects from "@/components/my-projects/MyProjects";
import SplashCursor from "@/components/ui/text";
import React from "react";

const page = () => {
  return (
    <div>
      <SplashCursor />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default page;
