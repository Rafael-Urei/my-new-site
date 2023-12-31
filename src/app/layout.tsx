import Navbar from "@/shared/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomMenu from "@/shared/components/BottomMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-700">
        <header className="flex items-center justify-center h-14 shadow-md shadow-slate-100 dark:shadow-none mb-10 dark:bg-zinc-800">
          <Navbar />
        </header>
        {children}
        <BottomMenu />
      </body>
    </html>
  );
}
