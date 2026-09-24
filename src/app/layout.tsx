import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {CustomCursor} from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pahal Srivastava — Software Engineer & AI Systems",
  description:
    "Portfolio of Pahal Srivastava — Software Engineer specializing in distributed backend workflows, multimodal AI proctoring, and agentic LLM systems.",
  keywords: [
    "Pahal Srivastava",
    "Software Engineer",
    "AI Engineer",
    "LLM Systems",
    "Bengaluru",
    "Full-Stack",
  ],
  authors: [{ name: "Pahal Srivastava" }],
  openGraph: {
    title: "Pahal Srivastava — Software Engineer & AI Systems",
    description:
      "Exploring how deep models think and building the distributed systems that power them.",
    url: "https://pahalsrivastava.github.io",
    siteName: "Pahal Srivastava Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#8B7CF6] selection:text-white`}>
       <CustomCursor />
       {children}
      </body>
    </html>
  );
}