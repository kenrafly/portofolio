"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
      () => {
        setSent(true);
        form.current?.reset(); // ✅ Clear inputs after sending
      },
      (error) => {
        console.error("FAILED...", error);
      }
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-2 border-t rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-2 border-t rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border-t rounded"
          rows={5}
          required
        />
        {sent && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
