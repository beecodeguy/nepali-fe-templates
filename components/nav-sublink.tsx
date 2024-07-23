"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn, isCompleteUrl } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
const NavSubLink = ({ title, subLinks = [] as any }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-1">
          <span>{title}</span>
          <ChevronDown size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subLinks?.map(({ id, title, route }) => {
          return (
            <DropdownMenuItem key={id}>
              <Link
                href={"#"}
                // target={target}
                target={"_blank"}
                onClick={() => window.open(route, "_blank")}
                className={cn(
                  "text-primary transition-colors hover:text-background hover:underline"
                )}
              >
                <span>{title}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavSubLink;
