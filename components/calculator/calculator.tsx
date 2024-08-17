"use client";

import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import InvestmentCalculator from "./investment-calculator";
import SIPCalculator from "./sip-calculator";

const Calculator = () => {
  return (
    <Tabs defaultValue="investment">
      <TabsList className="gap-4 p-4 h-fit">
        <TabsTrigger value="investment" className="hover:bg-indigo-100">
          Investment
        </TabsTrigger>
        <TabsTrigger value="sip" className="hover:bg-indigo-100">
          SIP
        </TabsTrigger>
      </TabsList>
      <Separator className="my-3" />
      <TabsContent value="investment">
        <InvestmentCalculator />
      </TabsContent>
      <TabsContent value="sip">
        <SIPCalculator />
      </TabsContent>
    </Tabs>
  );
};

export default Calculator;
