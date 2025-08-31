import ContactForm from "@/components/contact-form/ContactForm";
import Footer from "@/components/footer/Footer";
import SplashCursor from "@/components/ui/text";
import React from "react";

const page = () => {
  return (
    <div>
      <SplashCursor />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default page;
