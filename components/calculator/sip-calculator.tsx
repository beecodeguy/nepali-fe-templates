"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import ResultCard from "./result-card";
import { Button } from "../ui/button";
import { z } from "zod";
import { sipFormSchema } from "./validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { sipCalculator } from "@/actions/calculator";

const periodList = [
  { id: "1m", label: "Monthly" },
  { id: "1q", label: "Quarterly" },
  { id: "6m", label: "Semi-Yearly" },
  { id: "1y", label: "Yearly" },
];

const SIPCalculator = () => {
  type FormSchema = z.infer<typeof sipFormSchema>;

  const [result, setResult] = useState<Record<string, any> | undefined>(
    undefined
  );

  const form = useForm<FormSchema>({
    resolver: zodResolver(sipFormSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (values: FormSchema) => {
    const output = sipCalculator(values);
    console.log("OUTPUT:", output?.toLocaleString());
    setResult({
      ...values,
      output,
    });
  };

  return (
    <div className="w-full grid grid-cols-1 gap-6">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full grid grid-cols-2 gap-6">
            <FormField
              control={control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full flex flex-col gap-3">
                    <Label>SIP Frequency</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-transparent focus-visible:outline-none focus-visible:ring-offset-0">
                        <SelectValue placeholder="Select Period" />
                      </SelectTrigger>
                      <SelectContent>
                        {periodList.map((item) => (
                          <SelectItem value={item.id} key={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full flex flex-col gap-3">
                    <Label>SIP Amount</Label>
                    <Input
                      {...field}
                      type="number"
                      className="bg-transparent focus-visible:outline-none focus-visible:ring-offset-0"
                      value={field.value}
                      placeholder="sip amount"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="years"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full flex flex-col gap-3">
                    <Label>Years</Label>
                    <Input
                      {...field}
                      type="number"
                      className="bg-transparent focus-visible:outline-none focus-visible:ring-offset-0"
                      value={field.value}
                      placeholder="Investment amount"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="annualReturn"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full flex flex-col gap-3">
                    <Label>Expected Annual Rate of Return(%)</Label>
                    <Input
                      {...field}
                      type="text"
                      className="bg-transparent focus-visible:outline-none focus-visible:ring-offset-0"
                      value={field.value}
                      placeholder="Annual Return"
                      inputMode="decimal"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-4 !bg-primary relative z-[11]">
            Calculate
          </Button>
        </form>
      </Form>
      {!!result && <ResultCard resultText={JSON.stringify(result)} />}
    </div>
  );
};

export default SIPCalculator;
