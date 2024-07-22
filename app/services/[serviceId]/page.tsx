import BackButton from "@/components/back-button";
import Banner from "@/components/banner";
import Link from "next/link";
import React from "react";

const imageSrc =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const mapper = {
  "merchant-banking": "Merchant Banking",
  "registrar-shares": "Registrar to Shares",
  "mutual-fund": "Mutual Fund",
  "portfolio-management-service": "Portfolio Management Service",
  "depository-participants": "Depository Participants",
  "advisory-service": "Advisory Services",
};

const ServiceIdRoute = ({ params }: { params: { serviceId: string } }) => {
  const bannerTitle = mapper[params.serviceId] || params.serviceId;

  return (
    <div>
      <Banner imageSrc={imageSrc} title={bannerTitle} />
      <section className="p-4">
        <Link href={"/services"}>
          <BackButton />
        </Link>
      </section>
    </div>
  );
};

export default ServiceIdRoute;
