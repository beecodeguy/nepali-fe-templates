import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

//Styled Imports
import "./globals.css";
import "./main.scss";
import "@devnomic/marquee/dist/index.css";

// Component Imports
import Navbar from "@/components/navbar";
import TopNews from "@/components/top-news";
import HotNavs from "@/components/hot-navs";

// Provider Imports
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital Investment Site",
  description: "Template Site for Capital Investment",
};

export default function RootLayout({
  children,
  footer,
}: Readonly<{
  children: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "styled-scrollbar relative")}>
        <TopNews />
        <HotNavs />
        <Navbar />
        <section className="w-full min-h-screen relative">{children}</section>
        {footer}
        <ToastProvider />
        <ModalProvider />
      </body>
    </html>
  );
}
