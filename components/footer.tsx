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
  },
  { id: "2", title: "Nepal Stock Exchange" },
  { id: "3", title: "CDS & Clearig Ltd." },
  { id: "4", title: "Merchant Banking Association" },
];

const usefulLinks = [
  {
    id: "1",
    title: "Nepal Rastra Bank",
  },
  { id: "2", title: "Random Link 1" },
  { id: "3", title: "Random Link 2" },
  { id: "4", title: "Random Link 3" },
];

const quickLinks = [
  {
    id: "1",
    title: "Downloads",
  },
  { id: "2", title: "News" },
  { id: "3", title: "Notice" },
  { id: "4", title: "Career" },
  { id: "5", title: "Contact" },
];

const NavLinkItem = ({ title }) => {
  return (
    <li className="mb-4">
      <Link
        href={"#"}
        className="flex items-center gap-2 footer-text footer-link"
      >
        <span className="text-sm">{title}</span>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 bg-background border-t sm:p-6">
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
                  <NavLinkItem key={linkItem.id} title={linkItem.title} />
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Important Links
              </h6>
              <ul className="text-white dark:text-gray-400">
                {importantLinks.map((linkItem) => (
                  <NavLinkItem key={linkItem.id} title={linkItem.title} />
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Useful Links
              </h6>
              <ul className="text-white dark:text-gray-400">
                {usefulLinks.map((linkItem) => (
                  <NavLinkItem key={linkItem.id} title={linkItem.title} />
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
                    <MapPin size={16} />
                    <span>New Baneshowr, Kathmandu, Nepal</span>
                  </p>
                </li>
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <Phone size={16} />
                    <span>01-xxxxxxxx, 01-xxxxxxx</span>
                  </p>
                </li>
                <li className="mb-4">
                  <p className="flex items-center gap-2 footer-text">
                    <Mail size={16} />
                    <span>info@capital.com.np</span>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
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
              Capital™
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
