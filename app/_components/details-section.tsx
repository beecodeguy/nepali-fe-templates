"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const staticURL = "https://www.youtube.com/watch?v=IRg5GfOff-U";

const DetailsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-black">
          Himalaya Securities Banker Limited incorporated in 30th October 2023,
          is a Subsidiary of Himalayan Reinsurance Limited that provides
          Merchant Banking services as licensed by its apex resistor SEBON.
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Tutorials</h1>
        <ReactPlayer url={staticURL} controls width={"100%"} />
      </div>
    </div>
  );
};

export default DetailsSection;
