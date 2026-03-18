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

export const metadata = {
  title: "Karan Dalakoti | Full Stack Developer (Next.js, MERN)",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Built scalable applications including a doctor appointment platform and exam aggregation system. Explore my work and projects.",

  openGraph: {
    title: "Karan Dalakoti | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js and MERN stack. Explore my projects and experience.",
    url: "https://yourdomain.com", // replace with your actual domain
    siteName: "Karan Portfolio",
    type: "website",
  },
};


export default function RootLayout({ children }) {
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
