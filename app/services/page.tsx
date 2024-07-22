import Image from "next/image";
import React from "react";
import ServiceSection from "../_components/service";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const ServicesPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="h-[300px] w-full relative">
        <Image src={imageLink} alt="banner" fill />
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="absolute z-2 text-white text-4xl">Services</h1>
        </div>
      </div>
      <section className="p-4">
        <ServiceSection />
      </section>
    </section>
  );
};

export default ServicesPage;
