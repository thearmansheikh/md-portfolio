import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arman Sheikh — Full-Stack Developer & Designer",
  description:
    "Portfolio of Arman Sheikh — a full-stack developer and SaaS founder based in Aldershot, UK, building AI-powered tools, SaaS products, and e-commerce stores.",
  keywords: [
    "Arman Sheikh",
    "SaaS founder",
    "Full-stack developer",
    "Web developer",
    "UI/UX designer",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Arman Sheikh" }],
  openGraph: {
    title: "Arman Sheikh — Full-Stack Developer & Designer",
    description:
      "Building AI-powered tools, SaaS products, and e-commerce stores with modern technologies.",
    type: "website",
    url: "https://thearmansheikh.co",
    siteName: "thearmansheikh.co",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Sheikh — Full-Stack Developer & Designer",
    description:
      "Building AI-powered tools, SaaS products, and e-commerce stores with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
