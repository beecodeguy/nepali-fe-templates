import Image from "next/image";
import ServiceSection from "./_components/service";
import Notices from "./_components/notices";
import { Separator } from "@/components/ui/separator";
import DisplayLottie from "@/providers/lottie-file";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/aceternity/wavy-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BackgroundOverlay from "@/components/overlay";
import CarouselAction from "./_components/carousel-action";
import TestimonialSection from "./_components/testimonial-section";
import DetailsSection from "./_components/details-section";
import FeaturedSection from "./_components/featured-section";
import CalculatorSection from "./_components/calculator-section";
import BannerSlide from "./_components/banner-swiper";
import HotNavs from "@/components/hot-navs";
import HotLinks from "@/components/hot-links";

const StockMarketLottie = require("../constants/lottie/stock-market.json");

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <HotNavs />
      {/* <WavyBackground> */}
      <div className="w-full relative">
        <BannerSlide />
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-5 px-3 max-w-[500px]">
        <h1 className="text-4xl text-primary font-bold">
          Invest Today with Capital
        </h1>
        <p className="italic text-slate-700 px-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores
          nemo. Accusamus magnam modi tenetur sapiente veritatis minima optio
          dolorem quis, quaerat, amet ipsum similique voluptatum at deleniti ex
          laudantium?
        </p>
        <Button>Know More</Button>
      </div> */}
      {/* </WavyBackground> */}
      {/* <div className="h-[600px] w-full relative">
        <Image src={imageLink} alt="banner" fill />
      </div> */}
      <section className="w-full py-2 my-5 relative">
        {/* <Separator className="my-4" /> */}
        {/* <div className="absolute w-full h-full opacity-30 inset-0">
          <Image src="/assets/mountain.jpg" fill alt="overlay" />
        </div> */}
        <ServiceSection />
      </section>
      <section className="w-full py-2 my-5 relative">
        <div className="w-full p-4 mt-1 grow large-screen">
          <DetailsSection />
        </div>
      </section>
      {/* <Separator className="my-4" /> */}
      <section className="w-full py-2 my-5 relative">
        {/* <div className="absolute w-full h-full opacity-30 inset-0">
          <Image src="/assets/mountain.jpg" fill alt="overlay" />
        </div> */}
        <div className="w-full p-4 mt-1 grow large-screen">
          <FeaturedSection />
        </div>
      </section>
      {/* <Separator className="my-4" /> */}
      <section className="w-full py-2 my-5 relative">
        <div className="w-full p-4 mt-1 grow large-screen">
          <CalculatorSection />
        </div>
      </section>
      {/* <Separator className="my-4" /> */}
      <section className="w-full py-2 my-5 relative">
        <div className="w-full p-4 mt-1 grow large-screen">
          <Notices />
        </div>
      </section>
      <section className="p-4 my-5 w-full grow large-screen">
        {/* <Separator className="my-4" /> */}
        <TestimonialSection />
      </section>
    </main>
  );
}
