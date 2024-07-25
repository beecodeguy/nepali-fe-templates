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
import Autoplay from "embla-carousel-autoplay";
import BackgroundOverlay from "@/components/overlay";
import CarouselAction from "./_components/carousel-action";

const StockMarketLottie = require("../constants/lottie/stock-market.json");

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <WavyBackground> */}
      <div className="w-full relative">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div
                className="relative"
                style={{
                  width: "100%",
                  minHeight: "600px",
                  maxHeight: "600px",
                }}
              >
                <Image
                  src={"/assets/mountain.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
                <BackgroundOverlay />
                <CarouselAction
                  heading={"Himalayan Securities Banker Ltd."}
                  description={
                    "Himalaya Securities Banker Limited incorporated in 30th October 2023, is a Subsidiary of Himalayan Reinsurance Limited that provides Merchant Banking services as licensed by its apex resistor SEBON."
                  }
                  link="/services"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="relative"
                style={{
                  width: "100%",
                  minHeight: "600px",
                  maxHeight: "600px",
                }}
              >
                <Image
                  src={"/assets/portfolio_service.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
                <BackgroundOverlay />
                <CarouselAction
                  heading={"Portfolio Management Service"}
                  description={
                    "In HSBL, we have a dedicated team who professionally handles our PMS clients. PMS involves management of client’s assets through investment in various financial instrument such as equity, fixed deposits, bonds, debentures etc. to generate steady return on investments in line with your financial goals."
                  }
                  link="/services/portfolio-management-service"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="relative"
                style={{
                  width: "100%",
                  minHeight: "600px",
                  maxHeight: "600px",
                }}
              >
                <Image
                  src={"/assets/nepali_paisa.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
                <BackgroundOverlay />
                <CarouselAction
                  heading={"Depository Service"}
                  description={
                    "As a Depository participant (DP) Himalaya Securities Banker Ltd acts as an intermediary between the depository system (CDS &amp; Clearing Ltd) and our valued customers. Hence, beneficiary owner can open Demat Account at HSBL and we aim to provide prompt service to all our customers."
                  }
                  link="/services/depository-participants"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
      <section className="p-4 mt-4 grow large-screen">
        <Separator className="my-4" />
        <ServiceSection />
        <Separator className="my-4" />
        <Notices />
      </section>
    </main>
  );
}
