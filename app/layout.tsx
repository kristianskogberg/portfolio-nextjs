import type { Metadata } from "next";
import "./globals.css";

import { fira_code, inter } from "./fonts";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kristian Skogberg - Portfolio",
  description:
    "I'm studying for a Master's Degree specializing in Software Engineering at Tampere University. I like building useful apps with clean UIs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fira_code.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
