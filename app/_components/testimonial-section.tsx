import TestimonialCard from "@/components/testimonial-card";
import { Marquee } from "@devnomic/marquee";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold my-4 text-center">
        What Our Clients Say?
      </h1>
      <Marquee fade pauseOnHover className="[--duration:40s]">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <TestimonialCard key={idx} />
          ))}
      </Marquee>
    </div>
  );
};

export default TestimonialSection;
