import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const FeaturedSection = () => {
  return (
    <div className="w-full min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Publications</h1>
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
                  minHeight: "400px",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src={"/assets/mountain.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="relative"
                style={{
                  width: "100%",
                  minHeight: "400px",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src={"/assets/nepali_paisa.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Featured</h1>
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
                  minHeight: "400px",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src={"/assets/mountain.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="relative"
                style={{
                  width: "100%",
                  minHeight: "400px",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src={"/assets/nepali_paisa.jpg" || imageLink}
                  fill
                  alt="himalayan"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedSection;
