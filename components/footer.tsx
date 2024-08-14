import { footerPins } from "@/lib/consts";
import { fullYear, isCompleteUrl } from "@/lib/utils";
import { TFooterLink, TSocialLink, TSocialLinkTypes } from "@/types";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HotLinks from "./hot-links";

const SocialLink = ({ url, type }: { url: string; type: TSocialLinkTypes }) => {
  const Icons: Record<TSocialLinkTypes, ReactNode> = {
    facebook: <FaFacebook size={24} />,
    instagram: <FaInstagram size={24} />,
    youtube: <FaYoutube size={24} />,
    twitter: <FaXTwitter size={24} />,
  };

  return (
    <Link
      href={url}
      target="_blank"
      className="text-white hover:text-slate-500"
    >
      {Icons[type]}
    </Link>
  );
};

const NavLinkItem = ({ title, link = "" }) => {
  return (
    <li className="mb-4">
      <Link
        href={link || "#"}
        target={isCompleteUrl(link) ? "_blank" : "_self"}
        className="flex items-center gap-2 footer-text footer-link max-w-fit"
      >
        <span className="text-sm">{title}</span>
      </Link>
    </li>
  );
};

const Footer = ({
  socialLinks,
  importantLinks,
  usefulLinks,
  quickLinks,
  companyInfo,
}: {
  socialLinks: TSocialLink[];
  importantLinks: TFooterLink[];
  usefulLinks: TFooterLink[];
  quickLinks: TFooterLink[];
  companyInfo: Record<string, any>;
}) => {
  return (
    <>
      {!!socialLinks?.length && <HotLinks socialLinks={socialLinks} />}
      <footer id="footer" className="p-4 bg-primary border-t sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            {/* <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center gap-3">
              <Package2 size={40} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NAME
              </span>
            </Link>
          </div> */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
              {!!quickLinks?.length && (
                <div>
                  <h6 className="mb-6 text-white uppercase dark:text-white">
                    Quick Links
                  </h6>
                  <ul className="text-white dark:text-gray-400">
                    {quickLinks.map((linkItem) => (
                      <NavLinkItem
                        key={linkItem.id}
                        title={linkItem.title}
                        link={linkItem.link}
                      />
                    ))}
                  </ul>
                </div>
              )}
              {!!importantLinks?.length && (
                <div>
                  <h6 className="mb-6 text-white uppercase dark:text-white">
                    Important Links
                  </h6>
                  <ul className="text-white dark:text-gray-400">
                    {importantLinks.map((linkItem) => (
                      <NavLinkItem
                        key={linkItem.id}
                        title={linkItem.title}
                        link={linkItem.link}
                      />
                    ))}
                  </ul>
                </div>
              )}
              {!!usefulLinks?.length && (
                <div>
                  <h6 className="mb-6 text-white uppercase dark:text-white">
                    Useful Links
                  </h6>
                  <ul className="text-white dark:text-gray-400">
                    {usefulLinks.map((linkItem) => (
                      <NavLinkItem
                        key={linkItem.id}
                        title={linkItem.title}
                        link={linkItem.link}
                      />
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h6 className="mb-6 text-white uppercase dark:text-white">
                  Contact
                </h6>
                <ul className="text-white dark:text-gray-400">
                  <li className="mb-4">
                    <p className="flex items-center gap-2 footer-text">
                      <MapPin size={16} className="shrink-0" />
                      <span>{companyInfo?.location || "Location"}</span>
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="flex items-center gap-2 footer-text">
                      <Phone size={16} className="shrink-0" />
                      <span>{companyInfo?.phone || "Contact"}</span>
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="flex items-center gap-2 footer-text">
                      <Mail size={16} className="shrink-0" />
                      <span>{companyInfo?.email || "Email"}</span>
                    </p>
                  </li>
                </ul>
              </div>
              {companyInfo?.contactPerson?.name && (
                <div className="ml-4">
                  <h6 className="mb-6 text-white uppercase dark:text-white">
                    Information Officer
                  </h6>
                  <ul className="text-white dark:text-gray-400">
                    <li className="mb-4">
                      <p className="font-semibold">
                        {companyInfo?.contactPerson?.name}
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="flex items-center gap-2 footer-text">
                        <Phone size={16} />
                        <span>{companyInfo?.contactPerson?.phone}</span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 footer-text">
                        <Mail size={16} className="shrink-0" />
                        <span>{companyInfo?.contactPerson?.email}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
              © {fullYear()}{" "}
              <Link href={"#"} className="hover:underline font-semibold">
                {companyInfo?.name || "Company Name"}™
              </Link>
              . All Rights Reserved.
            </span>
            {!!socialLinks?.length && (
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {socialLinks.map(({ url, type }) => (
                  <SocialLink type={type} url={url} key={type} />
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
