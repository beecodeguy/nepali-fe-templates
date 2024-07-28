import BackgroundOverlay from "@/components/background-overlay";
import Banner from "@/components/banner";
import NoticeBanner from "@/components/notice-banner";
import { NEWS } from "@/lib/consts";
import React from "react";

const bannerImage =
  "https://images.unsplash.com/photo-1530819568329-97653eafbbfa?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NewsNoticeRoute = () => {
  return (
    <div>
      <Banner imageSrc={bannerImage} title={"News & Notices"} />
      <BackgroundOverlay>
        <section className="large-screen w-full my-6 p-4 flex flex-col items-center">
          <h1 className="mb-6">News</h1>
          <div className="grid w-full grid-cols-1 gap-6">
            {NEWS?.map((item) => (
              <NoticeBanner key={item.id} isFullWidth {...item} />
            ))}
          </div>
        </section>
      </BackgroundOverlay>
    </div>
  );
};

export default NewsNoticeRoute;
