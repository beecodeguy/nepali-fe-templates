import { footerPins } from "@/lib/consts";
import { isCompleteUrl } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Mail,
  Package2,
  Phone,
  PhoneCall,
  Youtube,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const importantLinks = [
  {
    id: "1",
    title: "Securities Board of Nepal",
    link: "https://www.sebon.gov.np/",
  },
  { id: "2", title: "Nepal Stock Exchange", link: "https://nepalstock.com/" },
  {
    id: "3",
    title: "CDS & Clearig Ltd.",

    link: "https://cdsc.com.np/",
  },
  {
    id: "4",
    title: "Merchant Banking Association",
    link: "https://mban.com.np/",
  },
  {
    id: "5",
    title: "Office of Company Registrar",
    link: "https://ocr.gov.np/",
  },
];

const usefulLinks = [
  {
    id: "1",
    title: "Nepal Rastra Bank",
    link: "https://www.nrb.org.np/",
  },
  { id: "2", title: "Meroshare", link: "https://meroshare.cdsc.com.np" },
  {
    id: "3",
    title: "United Nations Security Council list",
    link: "https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list",
  },
  {
    id: "4",
    title: "Targeted Sanction List (Home Affairs)",
    link: "https://www.moha.gov.np/page/targeted-sanction-list",
  },
];

const quickLinks = [
  {
    id: "1",
    title: "Downloads",
    link: "/downloads",
  },
  {
    id: "2",
    title: "News",
    link: "#",
  },
  { id: "3", title: "Notice", link: "#" },
  // { id: "4", title: "Career" },
  { id: "5", title: "Contact", link: "#" },
];

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

const Footer = () => {
  return (
    <footer className="p-4 bg-blue-skin-secondary border-t sm:p-6">
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
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Contact
              </h6>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <MapPin size={16} className="shrink-0" />
                    <span>{footerPins.location}</span>
                  </p>
                </li>
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <Phone size={16} className="shrink-0" />
                    <span>{footerPins.phone}</span>
                  </p>
                </li>
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <Mail size={16} className="shrink-0" />
                    <span>info@capital.com.np</span>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Information Officer
              </h6>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <p className="font-semibold">Officer Name</p>
                </li>
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <Phone size={16} />
                    <span>01-*******</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2 footer-text">
                    <Mail size={16} />
                    <span>mail@capital.com.np</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href={"#"} className="hover:underline font-semibold">
              Himalayan Securities Banker Ltd™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href={"#"} className="text-white hover:text-slate-500">
              <Facebook />
            </Link>
            <Link href={"#"} className="text-white hover:text-slate-500">
              <Instagram />
            </Link>
            <Link href={"#"} className="text-white hover:text-slate-500">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
