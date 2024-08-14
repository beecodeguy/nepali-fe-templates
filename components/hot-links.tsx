import { isCompleteUrl } from "@/lib/utils";
import { TSocialLink, TSocialLinkTypes } from "@/types";
import { Boxes } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const HoverLinkItem = ({ url = "", type }) => {
  const iconClassName = "shrink-0 text-white";

  const Icons: Record<TSocialLinkTypes, ReactNode> = {
    facebook: <FaFacebook size={16} className={`${iconClassName}`} />,
    twitter: <FaXTwitter size={16} className={`${iconClassName}`} />,
    instagram: <FaInstagram size={16} className={`${iconClassName}`} />,
    youtube: <FaYoutube size={16} className={`${iconClassName}`} />,
  };
  return (
    <Link
      href={url || "#"}
      target={isCompleteUrl(url) ? "_blank" : "_self"}
      className="hot-navs-gradient_reversed -left-[90px] relative rounded-3xl p-3 text-black flex items-center justify-end gap-4 transition-all hover:ease-linear hover:left-0 hover:flex-row-reverse"
    >
      <p className="text-sm font-normal text-white capitalize">{type}</p>
      {Icons[type] || <Boxes size={24} className="shrink-0 text-white" />}
    </Link>
  );
};

const HotLinks = ({ socialLinks }: { socialLinks: TSocialLink[] }) => {
  return (
    <div className="fixed z-10 top-60 left-0">
      <div className="flex flex-col gap-3 relative">
        {socialLinks?.map(({ type, url }) => (
          <HoverLinkItem key={type} type={type} url={url} />
        ))}
      </div>
    </div>
  );
};

export default HotLinks;
