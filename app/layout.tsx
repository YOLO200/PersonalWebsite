import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Yashvi Jasani - Software Developer | AI Engineer | Full Stack Developer",
    template: "%s | Yashvi Jasani - Software Engineer",
  },
  description:
    "Personal portfolio of Yashvi Jasani, an AI Engineer and Software Developer specializing in full-stack development and AI-driven systems. Software Engineer seeking full-time opportunities. Experienced in full-stack development, AI/ML systems, React, Next.js, Python, AWS. Computer Science student at Arizona State University (Graduating May 2026). Open to hire for software engineering, AI engineering, and full-stack developer positions.",
  keywords: [
    "software engineer",
    "software developer",
    "full stack developer",
    "AI engineer",
    "machine learning engineer",
    "React developer",
    "Next.js developer",
    "Python developer",
    "computer science graduate",
    "software engineer hiring",
    "looking for software engineer",
    "hire software engineer",
    "junior software engineer",
    "entry level software engineer",
    "new grad software engineer",
    "ASU computer science",
    "Arizona State University",
    "Yashvi Jasani",
    "full-stack engineer",
    "frontend developer",
    "backend developer",
    "TypeScript developer",
    "AWS engineer",
    "cloud engineer",
    "web developer",
    "JavaScript developer",
    "seeking software engineering opportunities",
  ],
  authors: [{ name: "Yashvi Jasani" }],
  creator: "Yashvi Jasani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashvijasani.com",
    title: "Yashvi Jasani - Software Developer | Open to Opportunities",
    description:
      "Personal portfolio of Yashvi Jasani, an AI Engineer and Software Developer. Software Engineer seeking full-time opportunities. Experienced in AI/ML, full-stack development with React, Next.js, Python, AWS. Graduating May 2026.",
    siteName: "Yashvi Jasani - Software Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashvi Jasani - Software Developer | Open to Opportunities",
    description:
      "Software Engineer seeking full-time opportunities. Experienced in AI/ML, full-stack development with React, Next.js, Python, AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
