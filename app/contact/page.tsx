import ContactForm from "@/components/contact-form/ContactForm";
import SplashCursor from "@/components/ui/text";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 px-4">
      <SplashCursor />
      <h1 className="text-7xl font-bold text-left my-8">Let&apos;s Connect!</h1>
      <p className="text-2xl text-gray-300 mb-8 ">
        Whether you&apos;re looking to collaborate on a project, need a solution
        to a challenging problem, or just want to talk tech, feel free to reach
        out. Together, we can turn ideas into reality.
      </p>
      <ContactForm />
    </div>
  );
};

export default page;
