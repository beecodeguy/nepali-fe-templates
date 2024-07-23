import LinkButton from "@/components/link-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    slug: "merchant-banking",
    title: "Merchant Banking",
    imagelink: "/assets/capital-images/piggybank-LYLDANKDE8g-unsplash.jpg",
  },
  {
    slug: "registrar-shares",
    title: "Registrar to Shares",
    imagelink: "/assets/capital-images/registrar.jpg",
  },
  {
    slug: "mutual-fund",
    title: "Mutual Fund",
    imagelink: "/assets/capital-images/mutual_fund.jpg",
  },
  {
    slug: "portfolio-management-service",
    title: "Portfolio Management Service(PMS)",
    imagelink: "/assets/capital-images/pms.jpg",
  },
  {
    slug: "depository-participants",
    title: "Depository Participants (DP)",
    imagelink: "/assets/capital-images/dp.jpg",
  },
  {
    slug: "advisory-service",
    title: "Advisory Services",
    imagelink: "/assets/capital-images/issue_management.jpg",
  },
];

const fallbackUrl =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ServiceCard = ({ title, slug, imageLink }) => {
  return (
    <Card className="group cursor-pointer max-w-[405px] h-fit hover:bg-foreground bg-white p-0 relative">
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
      <CardContent className="p-4">
        <CardTitle className="transition-all group-hover:underline">
          {title}
        </CardTitle>
        <CardDescription className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          aliquam nisi tenetur dignissimos alias quia laudantium, ducimus nemo
          voluptate, quo nam, labore sequi quaerat voluptatum dolore et. Libero,
          debitis placeat.
        </CardDescription>
      </CardContent>
      <CardFooter className="pb-0">
        <Link
          href={`/services/${slug}`}
          className="underline text-sky-500 transition-colors hover:text-sky-700"
        >
          <LinkButton />
        </Link>
      </CardFooter>
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
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
