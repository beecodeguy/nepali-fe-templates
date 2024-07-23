import Image from "next/image";
import ServiceSection from "./_components/service";
import Notices from "./_components/notices";
import { Separator } from "@/components/ui/separator";
import DisplayLottie from "@/providers/lottie-file";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/aceternity/wavy-background";

const StockMarketLottie = require("../constants/lottie/stock-market.json");

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <WavyBackground> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 px-3">
          <h1 className="text-4xl text-blue-600 font-bold">
            Invest Today with Capital
          </h1>
          <p className="italic text-slate-700 px-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dolores nemo. Accusamus magnam modi tenetur sapiente veritatis
            minima optio dolorem quis, quaerat, amet ipsum similique voluptatum
            at deleniti ex laudantium?
          </p>
          <Button>Know More</Button>
        </div>
        <DisplayLottie
          animationData={StockMarketLottie}
          style={{ height: "500px" }}
        />
      </div>
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
