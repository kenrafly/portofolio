import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ken Rafly – Full Stack Web Developer Indonesia",
  description:
    "Website pribadi Ken Rafly. Saya membantu Anda membangun website impian dengan teknologi modern seperti Next.js dan React.",
  keywords: [
    "Ken Rafly",
    "Full Stack Developer Indonesia",
    "Web Developer Indonesia",
    "Jasa Buat Website",
    "Next.js Indonesia",
    "React Developer",
    "Portofolio Developer",
  ],
  metadataBase: new URL("https://kenrafly.com"),
  alternates: {
    canonical: "https://kenrafly.com",
  },
  openGraph: {
    title: "Ken Rafly – Full Stack Developer Indonesia",
    description:
      "Ken Rafly adalah seorang developer web yang membangun website cepat, modern, dan responsif menggunakan Next.js dan React.",
    url: "https://kenrafly.com",
    siteName: "Ken Rafly",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ken Rafly Portfolio Preview",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Rafly – Full Stack Developer Indonesia",
    description:
      "Kunjungi portofolio Ken Rafly dan temukan bagaimana saya membangun website modern dengan Next.js dan React.",
    images: ["/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${hankenGrotesk.className} antialiased bg-[#0E100F] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
