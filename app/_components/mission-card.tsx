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
    <Card className="transistion-colors hover:bg-sky-100">
      <CardHeader>
        <Castle size={40} className="mb-3" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
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
