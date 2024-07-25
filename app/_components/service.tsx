import LinkButton from "@/components/link-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    slug: "portfolio-management-service",
    title: "Portfolio Management Service(PMS)",
    imagelink: "/assets/capital-images/pms.jpg",
    description:
      "In HSBL, we have a dedicated team who professionally handles our PMS clients. PMS involves management of client’s assets through investment in various financial instrument such as equity, fixed deposits, bonds, debentures etc. to generate steady return on investments in line with your financial goals.",
  },
  {
    slug: "advisory-service",
    title: "Corporate Advisory Services",
    imagelink: "/assets/capital-images/issue_management.jpg",
    description:
      "At HSBL, our corporate advisory team provides comprehensive financial and strategic advice to our clients empowering them to make the right decision.",
  },
  {
    slug: "depository-participants",
    title: "Depository Participants (DP)",
    imagelink: "/assets/capital-images/dp.jpg",
    description:
      "As a Depository participant (DP) Himalaya Securities Banker Ltd acts as an intermediary between the depository system (CDS &amp; Clearing Ltd) and our valued customers. Hence, beneficiary owner can open Demat Account at HSBL and we aim to provide prompt service to all our customers.",
  },
  // {
  //   slug: "merchant-banking",
  //   title: "Merchant Banking",
  //   imagelink: "/assets/capital-images/piggybank-LYLDANKDE8g-unsplash.jpg",
  // },
  {
    slug: "registrar-shares",
    title: "Registrar to Shares",
    imagelink: "/assets/capital-images/registrar.jpg",
    description:
      "HSBL acts as an intermediary for companies to offer professional services to its shareholders. We assure the shareholders with hassle free services within the minimum time frame to meet the diverse needs of our clients.",
  },
  {
    slug: "underwriting",
    title: "Underwriting",
    imagelink: "/assets/capital-images/mutual_fund.jpg",
    description:
      "HSBL offers underwriting services to assist our valued clients for fund raising of equity capital or debt instruments. We provide one stop solution to fulfill the underwriting needs meeting the regulatory requirements and provide assurance to our clients bearing the risk of uncertainty of under subscription capital instruments.",
  },
  // {
  //   slug: "mutual-fund",
  //   title: "Mutual Fund",
  //   imagelink: "/assets/capital-images/mutual_fund.jpg",
  // },
];

const fallbackUrl =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ServiceCard = ({ title, slug, imageLink, description }) => {
  return (
    <Card className="group cursor-pointer max-w-[405px] hover:bg-foreground bg-white p-0 relative flex flex-col">
      <CardHeader className="p-0">
        <div
          className="image relative"
          style={{
            maxWidth: "100%",
            maxHeight: "230px",
            minHeight: "230px",
          }}
        >
          <Image
            fill
            alt="service"
            src={imageLink || fallbackUrl}
            style={{ objectFit: "cover" }}
            className="rounded-tl rounded-tr"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col p-4 pb-2 h-full">
        <CardTitle className="transition-all group-hover:underline">
          {title}
        </CardTitle>
        <CardDescription className="mt-4 line-clamp-3">
          {description}
        </CardDescription>
        <CardFooter className="p-0 mt-auto">
          <Link
            href={`/services/${slug}`}
            className="underline text-sky-500 transition-colors hover:text-sky-700"
          >
            <LinkButton />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

const ServiceSection = () => {
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h1 className="underline text-primary text-4xl">Our Services</h1>
      <p className="capitalize">
        Presenting Banking Plan & Service That are Right For You
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {services?.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            slug={service.slug}
            imageLink={service.imagelink}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
