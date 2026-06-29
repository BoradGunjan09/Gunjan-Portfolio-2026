import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { CustomProviders } from "@/components/CustomProviders";
import { CursorGlow } from "@/components/CursorGlow";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gunjan Borad | Frontend Developer & UI/UX Designer Portfolio",
  description: "Senior Frontend Developer & UI/UX Designer Portfolio. I build pixel-perfect, accessible, and high-performance interactive websites using React, Tailwind CSS, WordPress with Responsive website",
  keywords: [
    "Gunjan Borad",
    "Frontend Developer Portfolio",
    "Web Designer Gujarat",
    "Next.js Portfolio",
    "UI/UX Designer",
    "Tailwind CSS Web Developer",
    "Laravel Frontend Developer",
    "Awwwards Portfolio Website"
  ],
  authors: [{ name: "Gunjan Borad" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen relative`}>
        <CustomProviders>
          {/* Ambient mouse glowing tracker */}
          <CursorGlow />
          
          {/* Animated blurred shapes and grids */}
          <AnimatedBackground />
          
          {children}
        </CustomProviders>
      </body>
    </html>
  );
}
