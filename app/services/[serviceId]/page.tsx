import { getDetailsOfService } from "@/actions/service.actions";
import BackButton from "@/components/back-button";
import Banner from "@/components/banner";
import { Alert } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Circle, CircleCheck, Dot } from "lucide-react";
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

const TypesOfService = ({ title, description }) => {
  return (
    <Card className="hover:bg-foreground">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-1">
          <Circle size={20} className="shrink-0" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ServiceFeatures = ({ title }) => {
  return (
    <p className="w-full flex items-center gap-2">
      <CircleCheck size={24} className="text-primary shrink-0" />
      <span>{title}</span>
    </p>
  );
};

const ServiceIdRoute = ({ params }: { params: { serviceId: string } }) => {
  const bannerTitle = mapper[params.serviceId] || params.serviceId;

  const detailsOfService = getDetailsOfService(params.serviceId);

  const { title, description, types = [], features = [] } = detailsOfService;

  return (
    <div>
      <Banner imageSrc={imageSrc} title={bannerTitle} />
      <section className="p-4">
        <Link href={"/services"}>
          <BackButton />
        </Link>
        <section className="w-full flex flex-col items-center gap-6 mt-4 max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p>{description}</p>
          {!!types.length && (
            <div className="w-full flex flex-col items-center gap-4">
              <Separator />
              <h1 className="underline">Types of {title}</h1>
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
                {types?.map((serviceTypes) => (
                  <TypesOfService key={serviceTypes?.title} {...serviceTypes} />
                ))}
              </div>
            </div>
          )}
          {!!features.length && (
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <Separator />
              <h1 className="underline">Features:</h1>
              <Card className="w-full border-0">
                <CardContent className="p-4 flex flex-col gap-3">
                  {features?.map((feature) => (
                    <ServiceFeatures key={feature} title={feature} />
                  ))}
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default ServiceIdRoute;
