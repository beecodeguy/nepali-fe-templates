import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, CircleUser, Menu, Package2, Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { Card } from "./ui/card";
import NavSubLink from "./nav-sublink";

const NavItem = ({ route, title, className = "", subLinks = [] as any }) => {
  const isSubLink = subLinks.length > 0;
  return (
    <Link
      href={route}
      className={cn(
        "text-white transition-colors hover:text-orange-100 hover:underline",
        className
      )}
    >
      {!isSubLink ? (
        <span>{title}</span>
      ) : (
        <NavSubLink subLinks={subLinks} title={title} />
      )}
    </Link>
  );
};

const navLinks = [
  // { id: "1", route: "/", title: "Home" },
  { id: "2", route: "/about-us", title: "About Us" },
  { id: "3", route: "/services", title: "Services" },
  { id: "5", route: "/downloads", title: "Downloads" },
  {
    id: "4",
    route: "#",
    title: "Online Services",
    subLinks: [
      { id: "1", route: "#", title: "PMS Login" },
      {
        id: "2",
        route: "https://meroshare.cdsc.com.np/#/login",
        title: "Meroshare Login",
      },
    ],
  },
  { id: "6", route: "#footer", title: "Information Center" },
  { id: "7", route: "/news-notices", title: "News & Notices" },
];

const Navbar = () => {
  return (
    <div className="flex w-full flex-col z-30">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:shrink-0 md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image alt="logo" src="/assets/hre.png" width={90} height={40} />
            <span className="sr-only">Capital Site</span>
          </Link>
          {navLinks?.map(({ id, route, title, subLinks }) => (
            <NavItem key={id} route={route} title={title} subLinks={subLinks} />
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-100">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Image
                  alt="logo"
                  src="/assets/hre.png"
                  width={90}
                  height={40}
                />
                <span className="sr-only">Capital Site</span>
              </Link>
              {navLinks.map((linkItem) => (
                <NavItem
                  key={linkItem.id}
                  className="text-slate-600 hover:text-slate-800"
                  {...linkItem}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
