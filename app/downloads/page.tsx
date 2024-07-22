import Banner from "@/components/banner";
import DownloadLink from "@/components/download-link";
import React from "react";

const imageSrc =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const downloadLinks = [
  { id: "1", title: "Demat Account Opening Form (Individual)" },
  { id: "2", title: "Demat Account Opening Form (Corporate)" },
  { id: "3", title: "Lifetime Application Form" },
  { id: "4", title: "Demat Renewal Form" },
  { id: "5", title: "Account Close Form" },
];

const DownloadsRoute = () => {
  return (
    <div>
      <Banner imageSrc={imageSrc} title={"Downloads"} />
      <section className="large-screen my-6 p-4">
        <div className="grid w-full grid-cols-1 gap-4">
          {downloadLinks?.map((downloadLink) => (
            <DownloadLink key={downloadLink.id} {...downloadLink} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DownloadsRoute;
