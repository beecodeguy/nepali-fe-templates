import { isCompleteUrl } from "@/lib/utils";
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
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const iconClassName = "shrink-0 text-white";

const Icons = {
  Facebook: <FaFacebook size={16} className={`${iconClassName}`} />,
  Twitter: <FaXTwitter size={16} className={`${iconClassName}`} />,
  Instagram: <FaInstagram size={16} className={`${iconClassName}`} />,
  Youtube: <FaYoutube size={16} className={`${iconClassName}`} />,
};

const HoverLinkItem = ({ link = "", title }) => {
  return (
    <Link
      href={link || "#"}
      target={isCompleteUrl(link) ? "_blank" : "_self"}
      className="hot-navs-gradient_reversed -left-[90px] relative rounded-3xl p-3 text-black flex items-center justify-end gap-4 transition-all hover:ease-linear hover:left-0 hover:flex-row-reverse"
    >
      <p className="text-sm font-normal text-white">{title}</p>
      {Icons[title] || <Boxes size={24} className="shrink-0 text-white" />}
    </Link>
  );
};

const HotLinks = () => {
  return (
    <div className="fixed z-10 top-60 left-0">
      <div className="flex flex-col gap-3 relative">
        <HoverLinkItem title={"Facebook"} link="#" />
        <HoverLinkItem title="Twitter" link="#" />
        <HoverLinkItem title={"Instagram"} link="#footer" />
        <HoverLinkItem title="Youtube" link="#" />
        {/* <HoverLinkItem title={"PMS Login"} /> */}
      </div>
    </div>
  );
};

export default HotLinks;
