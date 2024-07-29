import {
  Boxes,
  Landmark,
  Laptop,
  LaptopMinimal,
  MonitorDown,
  Navigation,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const iconClassName = "shrink-0 text-white";

const Icons = {
  "PMS Login": <LaptopMinimal size={24} className={`${iconClassName}`} />,
  Downloads: <MonitorDown size={24} className={`${iconClassName}`} />,
  Notices: <Newspaper size={24} className={`${iconClassName}`} />,
  "Meroshare Login": <Landmark size={24} className={`${iconClassName}`} />,
  Contact: <Navigation size={24} className={`${iconClassName}`} />,
};

const HoverLinkItem = ({ link = "", title }) => {
  return (
    <Link
      href={link || "#"}
      className="hot-navs-gradient -right-[130px] relative rounded-3xl p-4 text-black flex items-center gap-4 transition-all hover:ease-linear hover:right-0"
    >
      {Icons[title] || <Boxes size={24} className="shrink-0 text-white" />}
      <p className="text-sm font-semibold">{title}</p>
    </Link>
  );
};

const HotNavs = () => {
  return (
    <div className="fixed z-10 top-40 right-0">
      <div className="flex flex-col gap-3 relative">
        <HoverLinkItem title={"Notices"} />
        <HoverLinkItem title="Downloads" />
        <HoverLinkItem title={"Contact"} link="#footer" />
        <HoverLinkItem title="Meroshare Login" />
        <HoverLinkItem title={"PMS Login"} />
      </div>
    </div>
  );
};

export default HotNavs;
