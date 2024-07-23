import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

import { fira_code, inter } from "./fonts";
import Navbar from "./components/Navbar";
import GridBackground from "./components/GridBackground";

export const metadata: Metadata = {
  title: "Kristian Skogberg - Portfolio",
  description: "Kristian Skogberg's software engineering portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fira_code.variable}`}>
      <body className="h-dvh flex flex-col w-full">
        <Navbar />
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
