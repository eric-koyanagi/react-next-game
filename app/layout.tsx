import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric's Space Drama",
  description: "A sample app. See https://articles.erickoyanagi.com to learn more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <nav></nav>

        {children}
      
        <a className="absolute right-1 bottom-1 text-white text-xs" href="https://articles.erickoyanagi.com">My Blog</a>
      </body>
    </html>
  );
}
