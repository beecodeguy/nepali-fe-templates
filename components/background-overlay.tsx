import Image from "next/image";
import React, { ReactNode } from "react";

const BackgroundOverlay = ({
  children,
  overlay = "",
}: {
  children: ReactNode;
  overlay?: string;
}) => {
  const src = overlay || "/assets/mountain.jpg";

  return (
    <section className="relative">
      <div className="absolute w-full h-full opacity-20 inset-0 -z-[1]">
        <Image src={src} fill alt="overlay" />
      </div>
      {children}
    </section>
  );
};

export default BackgroundOverlay;
