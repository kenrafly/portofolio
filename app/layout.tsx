import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Ken Rafly",
  description:
    "Ken Rafly's personal website, create your dream website with me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${hankenGrotesk.variable} ${hankenGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
