import { TypewriterEffect } from "@/components/aceternity/typewriter-effect";
import LinkButton from "@/components/link-button";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CarouselAction = ({ heading, description, link }) => {
  const words = heading.split(" ")?.map((item) => ({
    text: item,
    className: "text-4xl font-semibold text-slate-100 underline pb-1",
  }));

  return (
    <div className="absolute flex flex-col gap-4 w-full items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center gap-5 max-w-[700px] p-4 rounded-sm">
        <Link href={link}>
          <TypewriterEffect words={words} />
        </Link>
        <p className="text-slate-100 max-w-[500px]">{description}</p>
        {/* {link && (
          <Link href={link}>
            <Button variant="secondary">
              <span>Learn More</span>
              <MoveRight size={24} className="ml-4" />
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default CarouselAction;
