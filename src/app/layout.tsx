import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZENVORA — Turning Ideas Into Solutions.",
  description:
    "Turning Ideas Into Solutions. We engineer scalable business systems, modern web applications, and intuitive digital experiences built to accelerate enterprise growth.",
  keywords: [
    "Zenvora",
    "Software Engineering Agency",
    "Next.js Development",
    "ERP Systems",
    "POS Systems",
    "Cloud DevOps",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090D0B] text-white antialiased selection:bg-[#1EB954]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
