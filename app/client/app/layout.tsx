"use client";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          :root {
            ${geistSans.variable};
            ${geistMono.variable};
          }
        `}</style>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/items">Item List</a></li>
              <li><a href="/pages">Page List</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
