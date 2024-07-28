import React from "react";
import ServiceSection from "../_components/service";
import Banner from "@/components/banner";
import BackgroundOverlay from "@/components/background-overlay";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const ServicesPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Banner imageSrc={imageLink} title={"Services"} />
      <BackgroundOverlay>
        <section className="p-4">
          <ServiceSection />
        </section>
      </BackgroundOverlay>
    </section>
  );
};

export default ServicesPage;
