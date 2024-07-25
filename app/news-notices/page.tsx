import Banner from "@/components/banner";
import React from "react";

const bannerImage =
  "https://images.unsplash.com/photo-1530819568329-97653eafbbfa?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NewsNoticeRoute = () => {
  return (
    <div>
      <Banner imageSrc={bannerImage} title={"News & Notices"} />
      <section className="large-screen my-6 p-4">
        <div className="grid w-full grid-cols-1 gap-4">
          <h1>News</h1>
        </div>
      </section>
    </div>
  );
};

export default NewsNoticeRoute;
