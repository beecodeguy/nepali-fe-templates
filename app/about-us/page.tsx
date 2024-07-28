import Image from "next/image";
import React from "react";
import Teams from "../_components/teams";
import { Separator } from "@/components/ui/separator";
import MissionCard from "../_components/mission-card";
import Banner from "@/components/banner";
import BackgroundOverlay from "@/components/background-overlay";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const companyProfile =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop";

const boardOfDirectors = [
  {
    title: "Chairman",
    id: "1",
    name: "Chairman Name",
  },
  {
    title: "Director",
    id: "2",
    name: "Director 1",
  },
  {
    title: "Director",
    id: "3",
    name: "Director 2",
  },
  {
    title: "Director",
    id: "4",
    name: "Director 3",
  },
];

const managementTeams = [
  {
    title: "Chief Executive Officer (CEO)",
    id: "1",
    name: "CEO Name",
  },
  {
    title: "Chief Sepecialized Investment Fund",
    id: "2",
    name: "Employee Name",
  },
  {
    title: "Chief Merchant Banking",
    id: "3",
    name: "Employee Name",
  },
  {
    title: "Chief Business Support",
    id: "4",
    name: "Employee name",
  },
  {
    title: "Chief Investment Officer",
    id: "5",
    name: "Employee name",
  },
];

const AboutUsPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Banner title="Company Profile" imageSrc={imageLink} />
      <BackgroundOverlay>
        <section className="p-5 large-screen">
          <h1 className="underline mb-6 text-center text-4xl text-primary">
            About Us
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7 px-3 h-[300px]">
            <div className="content flex flex-col gap-6">
              <p>
                Himalaya Securities Banker Limited incorporated in 30th October
                2023, is a Subsidiary of Himalayan Reinsurance Limited that
                provides Merchant Banking services as licensed by its apex
                resistor SEBON.
              </p>
              <p>
                HSBL is one of the emerging Merchant bankers that aims to
                provide innovative financial services to create investment for a
                secured future and to bridge the gap between savings and
                investments to create sustainable wealth.
              </p>
            </div>
            <div className="col-span-2 relative">
              <Image
                className="ml-auto"
                src={companyProfile}
                alt="about"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <Separator />
        <section className="bg-gray-50">
          <div className="grid p-4 my-4 grid-cols-1 md:grid-cols-3 gap-4 large-screen">
            <MissionCard
              title="Vision"
              description="Our vision is to become one of the leading Merchant Bankers in Nepal."
            />
            <MissionCard
              title={"Mission"}
              description="Our mission is to provide innovative and integrated financial services with excellent
growth opportunities."
            />
            <MissionCard
              title="Values"
              description="We uphold integrity, prioritize clients, pursue excellence, embrace innovation, ensure sustainable growth, and foster teamwork."
            />
          </div>
        </section>
        <Separator />
        <section className="large-screen my-6 px-4">
          <h1 className="underline mb-3 text-center text-blue-700 text-4xl font-bold">
            Board of Directors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boardOfDirectors?.map((director) => (
              <Teams key={director.id} {...director} />
            ))}
          </div>
        </section>
        <Separator />
        <section className="bg-gray-50">
          <div className="large-screen my-4 p-4">
            <h1 className="underline mb-3 text-center text-blue-700 text-4xl font-bold">
              Management Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {managementTeams?.map((director) => (
                <Teams key={director.id} {...director} />
              ))}
            </div>
          </div>
        </section>
      </BackgroundOverlay>
    </section>
  );
};

export default AboutUsPage;
