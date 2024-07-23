import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const LinkButton = () => {
  return (
    <Button variant="link" className="text-destructive px-0 font-semibold">
      <span>Read More</span>
      <MoveRight className="ml-3" />
    </Button>
  );
};

export default LinkButton;
