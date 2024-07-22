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

const Footer = () => {
  return (
    <footer className="p-4 bg-blue-gradient border-t sm:p-6 dark:bg-gray-800">
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
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Downloads
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    News
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Notice
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Career
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Important Links
              </h6>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Securities Board of Nepal
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Nepal Stock Exchange
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    CDS & Clearig Ltd.
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Merchant Banking Association
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-white uppercase dark:text-white">
                Useful Links
              </h6>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Nepal Rastra Bank
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Random Link 1
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Random Link 2
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 footer-text"
                  >
                    Random Link 3
                  </Link>
                </li>
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
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href={"#"} className="hover:underline font-semibold">
              Capital™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href={"#"} className="text-slate-600 hover:text-slate-500">
              <Facebook />
            </Link>
            <Link href={"#"} className="text-slate-600 hover:text-slate-500">
              <Instagram />
            </Link>
            <Link href={"#"} className="text-slate-600 hover:text-slate-500">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
