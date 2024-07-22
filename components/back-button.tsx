import React from "react";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Button>
      <MoveLeft size={24} />
      <span className="ml-3">Back</span>
    </Button>
  );
};

export default BackButton;
