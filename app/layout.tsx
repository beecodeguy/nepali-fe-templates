import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

//Styled Imports
import "./globals.css";
import "./main.scss";
import "@devnomic/marquee/dist/index.css";
// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Component Imports
import Navbar from "@/components/navbar";
import TopNews from "@/components/top-news";
import HotNavs from "@/components/hot-navs";

// Provider Imports
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import Script from "next/script";
import FooterSlot from "./_components/@footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital Investment Site",
  description: "Template Site for Capital Investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "styled-scrollbar relative")}>
        <TopNews />
        <HotNavs />
        <Navbar />
        <section className="w-full min-h-screen relative">{children}</section>
        <FooterSlot />
        <ToastProvider />
        <ModalProvider />
        <Script
          type="text/javascript"
          src="https://embed.tawk.to/66bc90070cca4f8a7a75d3b5/1i58957sq"
        ></Script>
      </body>
    </html>
  );
}
