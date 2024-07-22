import Image from "next/image";
import React from "react";

const Banner = ({ imageSrc, title }) => {
  return (
    <div className="h-[300px] w-full relative border-b-2 border-orange-500">
      <Image src={imageSrc} alt="banner" fill />
      <div className="absolute w-full h-full flex items-center justify-center">
        <h1 className="absolute z-2 text-white text-4xl uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
