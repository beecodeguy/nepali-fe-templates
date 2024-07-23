import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const NoticeBanner = () => {
  return (
    <Alert className="max-w-[300px] hover:bg-sky-100 border-l-[6px] border-l-red-500">
      <Badge variant="secondary">July 22, 2024</Badge>
      <h6>Capital Notice</h6>
      <Link
        href={"#"}
        className="underline text-sm text-sky-500 transition-colors hover:text-sky-700"
      >
        Read More
      </Link>
    </Alert>
  );
};

const Notices = () => {
  return (
    <section className="my-5 w-full flex flex-col items-center gap-4 justify-center">
      <h1 className="underline">Notices & Updates</h1>
      <p>Latest News and updates at a glance</p>
      <div className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto">
        <NoticeBanner />
        <NoticeBanner />
        <NoticeBanner />
      </div>
    </section>
  );
};

export default Notices;
