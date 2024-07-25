import LinkButton from "@/components/link-button";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const NoticeBanner = () => {
  return (
    <Alert className="max-w-[300px] group cursor-pointer bg-white hover:bg-foreground border-l-[6px] border-l-red-500 pb-1">
      <Badge variant="secondary">July 22, 2024</Badge>
      <h6 className="text-primary group-hover:text-background group-hover:underline transition-all line-clamp-2">
        Himalaya New name in Capital Market
      </h6>
      <p className="line-clamp-1 text-black">
        यो समाचार हो। Himalaya Securities Banker Limited incorporated in 30th
        October 2023, is a Subsidiary of Himalayan Reinsurance Limited that
        provides Merchant Banking services as licensed by its apex resistor
        SEBON.
      </p>
      <Link href={"/news-notices/1"}>
        <LinkButton />
      </Link>
    </Alert>
  );
};

const Notices = () => {
  return (
    <section className="my-5 w-full flex flex-col items-center gap-4 justify-center">
      <h1 className="underline">Notices & Updates</h1>
      <p>Latest News and updates at a glance</p>
      <div className="grid w-full grid-cols-2 place-items-center md:grid-cols-4">
        <NoticeBanner />
        <NoticeBanner />
        <NoticeBanner />
      </div>
    </section>
  );
};

export default Notices;
