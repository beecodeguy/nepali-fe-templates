import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Castle, Gem, Goal, Target } from "lucide-react";
import React from "react";

const missionIcons = {
  Vision: <Target size={40} />,
  Mission: <Goal size={40} />,
  Values: <Gem size={40} />,
};

const MissionCard = ({ title, description }) => {
  return (
    <Card className="transition-colors group hover:bg-card-hover">
      <CardHeader className="flex flex-row items-center justify-start gap-5">
        <div className="p-3 bg-background w-fit rounded flex items-center justify-center mb-3 text-slate-200">
          {missionIcons[title] || <Castle size={40} />}
        </div>
        <CardTitle className="text-3xl text-primary group-hover:text-gray-100">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="group-hover:text-gray-100">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
