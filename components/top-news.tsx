import React, { Fragment } from "react";
import { Marquee } from "@devnomic/marquee";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const NewsItem = () => {
  return (
    <p className="text-white text-sm cursor-pointer">
      Check Himalaya Capital Services
    </p>
  );
};

const TopNews = () => {
  return (
    <div className="w-full flex items-center gap-4">
      <Marquee fade pauseOnHover className="bg-slate-500 py-3 basis-4/5">
        {Array(5)
          .fill(1)
          .map((item, idx) => (
            <Fragment key={idx}>
              <NewsItem />
              <Separator orientation="vertical" className="bg-white" />
            </Fragment>
          ))}
      </Marquee>
      <div className="ml-auto flex items-center justify-end gap-3 py-2 pr-2">
        <Link href={"#"}>
          <Button
          // className="bg-transparent text-primary border-primary"
          // variant="outline"
          >
            PMS Login
          </Button>
        </Link>
        <Link href={"https://himalayanre.com/"} target="_blank">
          <Button
            className="bg-transparent text-primary border-primary hover:text-blue-skin-primary"
            variant="outline"
          >
            Himalayan Re
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopNews;
