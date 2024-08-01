import { getSingleNews } from "@/actions/news.action";
import React from "react";

const NewsIdRoute = async () => {
  const newsDetails = await getSingleNews(1);
  return (
    <section className="min-h-screen mx-auto p-4 flex flex-col items-center justify-start gap-4 max-w-[800px]">
      <h1 className="text-3xl mt-3 font-extrabold text-black">
        {newsDetails.title}
      </h1>
      <p className="text-black">{newsDetails.description}</p>
    </section>
  );
};

export default NewsIdRoute;
