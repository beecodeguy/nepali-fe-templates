"use client";

import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const FeaturedSection = () => {
  return (
    <div className="w-full min-h-[400px] grid grid-cols-1 relative md:grid-cols-2 gap-4 md:gap-8">
      <div className="w-full relative flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Publications</h1>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          grabCursor
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Featured</h1>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          grabCursor
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
