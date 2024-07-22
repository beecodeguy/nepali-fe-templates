import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChart } from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  "Merchant Banking",
  "Registrar to Shares",
  "Mutual Fund",
  "Portfolio Management Service(PMS)",
  "Depository Participants",
  "Advisory Services",
];

const ServiceCard = ({ title }) => {
  return (
    <Card className="hover:bg-sky-200">
      <CardHeader>
        <AreaChart size={24} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          aliquam nisi tenetur dignissimos alias quia laudantium, ducimus nemo
          voluptate, quo nam, labore sequi quaerat voluptatum dolore et. Libero,
          debitis placeat.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={"#"}
          className="underline text-sky-500 transition-colors hover:text-sky-700"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

const ServiceSection = () => {
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h1 className="underline">Our Services</h1>
      <p className="capitalize">
        Presenting Banking Plan & Service That are Right For You
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        {services?.map((service) => (
          <ServiceCard key={service} title={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
