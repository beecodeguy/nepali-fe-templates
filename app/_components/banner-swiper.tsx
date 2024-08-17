"use client";

import { Autoplay, Pagination } from "swiper/modules";
import BackgroundOverlay from "@/components/overlay";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselAction from "./carousel-action";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const BannerSlide = () => {
  return (
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
    >
      <SwiperSlide>
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
            heading={"Himalaya Securities Banker Ltd."}
            description={
              "Himalaya Securities Banker Limited incorporated in 30th October 2023, is a Subsidiary of Himalayan Reinsurance Limited that provides Merchant Banking services as licensed by its apex resistor SEBON."
            }
            link="/about-us"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlide;
