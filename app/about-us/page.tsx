import Image from "next/image";
import React from "react";
import Teams from "../_components/teams";
import { Separator } from "@/components/ui/separator";
import MissionCard from "../_components/mission-card";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const companyProfile =
  "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
      <div className="h-[300px] w-full relative">
        <Image src={imageLink} alt="banner" fill />
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="absolute z-2 text-white text-4xl">Company Profile</h1>
        </div>
      </div>
      <section className="p-5 large-screen">
        <h1 className="underline mb-4 text-center">About Us</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-3">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed
              iste hic nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos sed iste hic
              nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed
              iste hic nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos sed iste hic
              nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!
            </p>
          </div>
          <Image
            className="ml-auto"
            src={companyProfile}
            alt="about"
            width={500}
            height={500}
          />
        </div>
      </section>
      <Separator />
      <div className="grid p-4 my-4 grid-cols-1 md:grid-cols-3 gap-4 alternate-gradient-bg">
        <MissionCard title="Mission" />
        <MissionCard title={"Values"} />
        <MissionCard title="Vision" />
      </div>
      <Separator />
      <section className="large-screen my-4 px-4">
        <h1 className="underline mb-3 text-center">Board of Directors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {boardOfDirectors?.map((director) => (
            <Teams key={director.id} {...director} />
          ))}
        </div>
      </section>
      <Separator />

      <section className="large-screen my-4 p-4 alternate-gradient-bg">
        <h1 className="underline mb-3 text-center">Management Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {managementTeams?.map((director) => (
            <Teams key={director.id} {...director} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutUsPage;
