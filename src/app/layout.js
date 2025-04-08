"use client";

import { Ubuntu } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        {children}
        <MenuBar />
        <div className="warning">
          Please use a smaller screen to view this website
        </div>
      </body>
    </html>
  );
}