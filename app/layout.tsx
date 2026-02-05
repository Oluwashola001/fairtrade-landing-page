import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google"; // Add Fraunces here
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  weight: "900", // Extra bold for that logo/headline look
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "FAIRTRADE | Shop Smart in Jamaica",
  description: "Compare prices and find the best deals across Jamaica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}