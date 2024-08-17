import Calculator from "@/components/calculator/calculator";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CalculatorSection = () => {
  return (
    <Card className="border-primary rounded-md p-2 !mx-10">
      <h1 className="text-2xl text-primary font-semibold my-2">Calculations</h1>
      <Separator className="mb-3" />
      <Calculator />
    </Card>
  );
};

export default CalculatorSection;
