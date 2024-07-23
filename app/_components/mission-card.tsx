import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Castle } from "lucide-react";
import React from "react";

const MissionCard = ({ title }) => {
  return (
    <Card className="transition-colors group hover:bg-card-hover">
      <CardHeader className="flex flex-row items-center justify-start gap-5">
        <div className="p-3 bg-background w-fit rounded flex items-center justify-center mb-3 text-slate-200">
          <Castle size={40} />
        </div>
        <CardTitle className="text-3xl text-primary group-hover:text-gray-100">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="group-hover:text-gray-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          facilis sed voluptatum, cupiditate voluptatem nihil maxime impedit
          voluptate numquam! Qui odit possimus doloremque eveniet corporis
          laudantium explicabo tenetur quos! Nesciunt!
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
