import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Kuria | Portfolio",
  authors: [
    {
      name: "Matthew Kuria",
    },
  ],
  creator: "Matthew Kuria",
  keywords: [
    "Matthew Kuria",
    "Portfolio",
    "Best Web Developer",
    "Best Web Developer in Kenya",
    "Software Engineer in Kenya",
    "Best Software Engineer in Kenya",
    "Software Engineer",
    "Web Developer",
    "Web Development",
    "Software Development",
    "Full Stack Developer in Kenya",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
    "GitHub",
    "LinkedIn",
    "Resume",
    "Blog",
    "Photography",
    "Art",
    "Design",
    "Open Source",
    "Contributions",
    "Community",
    "Tech Stack",
  ],
  openGraph: {
    title: "Matthew Kuria | Portfolio",
    description:
      "Welcome to Matthew Kuria's portfolio website showcasing projects, skills, and achievements.",
    url: "https://matthewkuria.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Matthew Kuria",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matthew Kuria | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Kuria | Portfolio",
    description:
      "Welcome to Matthew Kuria's portfolio website showcasing projects, skills, and achievements.",
    images: ["/og-image.png"],
    creator: "@matthewkuria",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },  
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Matthew Kuria | Portfolio",
    capable: true,
    startupImage: [
      "/apple-touch-startup-image-640x1136.png",
      "/apple-touch-startup-image-750x1334.png",
      "/apple-touch-startup-image-1242x2208.png",
      "/apple-touch-startup-image-1536x2048.png",
      "/apple-touch-startup-image-2048x2732.png",
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
  },
  description: "Welcome to Matthew Kuria's portfolio website showcasing projects, skills, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
