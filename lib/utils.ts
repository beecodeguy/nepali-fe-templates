import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isCompleteUrl = (url: string) => {
  if (!url) return false;
  const regex = /^(https?:\/\/).+/;
  return regex.test(url);
};
