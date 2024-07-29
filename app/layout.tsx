import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/providers/toast-provider";
import { cn } from "@/lib/utils";

//Styled Imports
import "./globals.css";
import "./main.scss";
import "@devnomic/marquee/dist/index.css";
import TopNews from "@/components/top-news";
import HotNavs from "@/components/hot-navs";

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
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
