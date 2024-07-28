import React, { Fragment } from "react";
import { Marquee } from "@devnomic/marquee";
import { Separator } from "./ui/separator";

const NewsItem = () => {
  return (
    <p className="text-white text-sm cursor-pointer">
      Check Himalaya Capital Services
    </p>
  );
};

const TopNews = () => {
  return (
    <Marquee fade pauseOnHover className="bg-slate-500 py-3">
      {Array(5)
        .fill(1)
        .map((item, idx) => (
          <Fragment key={idx}>
            <NewsItem />
            <Separator orientation="vertical" className="bg-white" />
          </Fragment>
        ))}
    </Marquee>
  );
};

export default TopNews;
