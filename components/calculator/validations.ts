import { z } from "zod";

export const investmentFormSchema = z.object({
  frequency: z.string().min(1, "Investment Frequency is required."),
  amount: z
    .string()
    .min(1, "Investment Amount is required.")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Investment Amount must be a positive number.",
    }),
  years: z
    .string()
    .min(1, "Investment Years are required.")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Investment Years must be a positive number.",
    }),
  annualReturn: z
    .string()
    .min(1, "Annual Rate of Return is required.")
    .refine(
      (value) => {
        const num = Number(value);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      {
        message: "Annual Return must be a number between 0% and 100%.",
      }
    ),
});

export const sipFormSchema = z.object({
  frequency: z.string().min(1, "Investment Frequency is required."),
  amount: z
    .string()
    .min(1, "Investment Amount is required.")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Investment Amount must be a positive number.",
    }),
  years: z
    .string()
    .min(1, "Investment Years are required.")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Investment Years must be a positive number.",
    }),
  annualReturn: z
    .string()
    .min(1, "Annual Rate of Return is required.")
    .refine(
      (value) => {
        const num = Number(value);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      {
        message: "Annual Return must be a number between 0% and 100%.",
      }
    ),
});
