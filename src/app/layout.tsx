import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVESHA'26 | National Level Technical Symposium",
  description: "Join us for AVESHA'26, a national level technical symposium organized by the Department of Electrical and Electronics Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-[#050505]`}
      >
        <Navbar />
        <Toaster position="top-center" />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
